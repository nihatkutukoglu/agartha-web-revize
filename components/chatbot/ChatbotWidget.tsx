"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  ChevronRight,
  Mail,
  MessageCircle,
  Phone,
  Plane,
  Send,
  Trash2,
  UserRound,
  Wrench,
  X,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  type FormEvent,
  type KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  getChatbotQuickPrompts,
  getChatbotReply,
  getInitialMessage,
  getProductTitle,
  type ChatAction,
  type ChatFollowUp,
  type ChatMemory,
  type ChatProductCard,
  type ChatProductId,
} from "@/data/chatbot";
import type { Lang } from "@/data/dictionary";
import styles from "./ChatbotWidget.module.css";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  content: string;
  action?: ChatAction | ChatAction[];
  followUp?: ChatFollowUp;
  products?: readonly ChatProductCard[];
};

type PersistedChat = {
  savedAt: number;
  messages: ChatMessage[];
  memory: ChatMemory;
};

const STORAGE_KEY = "agartha-assistant-v4";
const STORAGE_TTL = 7 * 24 * 60 * 60 * 1000;
const productIcons = {
  ctm_erp: Plane,
  boss_eye: Activity,
  yalin_ebms: Wrench,
} satisfies Record<ChatProductId, typeof Plane>;

export function ChatbotWidget() {
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const isEnglish = lang === "en";
  const t = (tr: string, en: string) => isEnglish ? en : tr;
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([getInitialMessage(lang)]);
  const [memory, setMemory] = useState<ChatMemory>({ discussedProducts: [] });
  const [hydrated, setHydrated] = useState(false);
  const messageId = useRef(1);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const responseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let active = true;
    queueMicrotask(() => {
      if (!active) return;
      try {
        const stored = window.localStorage.getItem(`${STORAGE_KEY}-${lang}`);
        if (stored) {
          const parsed = JSON.parse(stored) as PersistedChat;
          if (Date.now() - parsed.savedAt < STORAGE_TTL && parsed.messages?.length) {
            setMessages(parsed.messages);
            setMemory(parsed.memory ?? { discussedProducts: [] });
            messageId.current = Math.max(...parsed.messages.map((message) => message.id), 1);
          } else {
            window.localStorage.removeItem(`${STORAGE_KEY}-${lang}`);
          }
        }
      } catch {
        window.localStorage.removeItem(`${STORAGE_KEY}-${lang}`);
      }
      setHydrated(true);
    });
    return () => { active = false; };
  }, [lang]);

  useEffect(() => {
    if (!hydrated) return;
    const persisted: PersistedChat = { savedAt: Date.now(), messages, memory };
    window.localStorage.setItem(`${STORAGE_KEY}-${lang}`, JSON.stringify(persisted));
  }, [hydrated, lang, memory, messages]);

  useEffect(() => {
    if (open) window.setTimeout(() => inputRef.current?.focus(), 120);
  }, [open]);

  useEffect(() => {
    const container = messagesRef.current;
    if (container) container.scrollTo({ top: container.scrollHeight, behavior: reduceMotion ? "auto" : "smooth" });
  }, [messages, reduceMotion, typing]);

  useEffect(() => () => {
    if (responseTimer.current) clearTimeout(responseTimer.current);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const addAssistantMessage = (content: string, extras: Partial<ChatMessage> = {}) => {
    messageId.current += 1;
    setMessages((current) => [...current, { id: messageId.current, role: "assistant", content, ...extras }]);
  };

  const sendMessage = (rawMessage: string) => {
    const message = rawMessage.trim().slice(0, 700);
    if (!message || typing) return;
    messageId.current += 1;
    setMessages((current) => [...current, { id: messageId.current, role: "user", content: message }]);
    setInput("");
    setTyping(true);

    const reply = getChatbotReply(message, lang, memory);
    responseTimer.current = setTimeout(() => {
      addAssistantMessage(reply.message, {
        action: reply.action,
        followUp: reply.followUp,
        products: reply.products,
      });
      setMemory((current) => {
        const selectedProduct = reply.memoryUpdate?.selectedProduct;
        const discussedProducts = selectedProduct && !current.discussedProducts.includes(selectedProduct)
          ? [...current.discussedProducts, selectedProduct]
          : current.discussedProducts;
        return { ...current, ...reply.memoryUpdate, discussedProducts };
      });
      setTyping(false);
    }, reduceMotion ? 0 : 420);
  };

  const clearConversation = () => {
    if (responseTimer.current) clearTimeout(responseTimer.current);
    window.localStorage.removeItem(`${STORAGE_KEY}-${lang}`);
    setMessages([getInitialMessage(lang)]);
    setMemory({ discussedProducts: [] });
    setTyping(false);
  };

  const followAction = (action: ChatAction) => {
    if (!action.target) return;
    if (action.target.startsWith("tel:") || action.target.startsWith("mailto:")) {
      window.open(action.target, "_self");
      return;
    }
    setOpen(false);
    window.setTimeout(() => document.querySelector(action.target!)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    }), 120);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  const handleTextareaKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className={styles.root}>
      <AnimatePresence>
        {open && (
          <motion.section
            className={styles.panel}
            role="dialog"
            aria-modal="false"
            aria-label={t("Agartha Teknoloji sanal asistanı", "Agartha Technology virtual assistant")}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: reduceMotion ? 0.08 : 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <header className={styles.header}>
              <div className={styles.identity}>
                <span className={styles.identityLogo} aria-hidden="true"><Image src="/agartha-chatbot-logo.png" width={48} height={48} alt="" unoptimized /></span>
                <span className={styles.identityText}>
                  <strong>{t("Agartha Asistan", "Agartha Assistant")}</strong>
                  <span>{t("Çevrim içi", "Online")}</span>
                  <em>{memory.selectedProduct ? `${t("Konuştuğumuz çözüm", "Current solution")}: ${getProductTitle(memory.selectedProduct, lang)}` : t("Sorunuzu doğal şekilde yazabilirsiniz", "Ask your question naturally")}</em>
                </span>
              </div>
              <div className={styles.headerActions}>
                <button className={styles.headerButton} type="button" aria-label={t("Sohbeti temizle", "Clear chat")} onClick={clearConversation}><Trash2 size={16} /></button>
                <button className={styles.close} type="button" aria-label={t("Sohbeti kapat", "Close chat")} onClick={() => setOpen(false)}><X size={18} /></button>
              </div>
            </header>

            <div className={styles.messages} ref={messagesRef} aria-live="polite">
              {messages.map((message) => (
                <div className={`${styles.messageRow} ${message.role === "user" ? styles.messageRowUser : ""}`} key={message.id}>
                  {message.role === "assistant" && <span className={styles.avatar} aria-hidden="true"><Image src="/agartha-chatbot-logo.png" width={28} height={28} alt="" unoptimized /></span>}
                  <div className={`${styles.bubble} ${message.products?.length ? styles.bubbleWide : ""}`}>
                    {message.content}
                    {message.products && (
                      <div className={styles.productCards}>
                        {message.products.map((product) => {
                          const Icon = productIcons[product.id];
                          return (
                            <button className={styles.productCard} type="button" onClick={() => sendMessage(product.prompt)} disabled={typing} key={product.id}>
                              <span className={styles.productCardIcon}><Icon size={18} /></span>
                              <span className={styles.productCardContent}><span>{product.category}</span><strong>{product.title}</strong><small>{product.summary}</small><span className={styles.productFeatures}>{product.features.slice(0, 2).map((feature) => <i key={feature}>{feature}</i>)}</span></span>
                              <ArrowUpRight className={styles.productCardArrow} size={16} />
                            </button>
                          );
                        })}
                      </div>
                    )}
                    {message.action && <div className={styles.actionRow}>{(Array.isArray(message.action) ? message.action : [message.action]).map((action, index) => <button className={styles.messageAction} type="button" onClick={() => followAction(action)} key={`${action.label}-${index}`}>{action.label}<ChevronRight size={14} /></button>)}</div>}
                    {message.followUp && <div className={styles.followUp}><p>{message.followUp.question}</p><div className={styles.followUpOptions}>{message.followUp.options.map((option, index) => { const label = typeof option === "string" ? option : option.label; const value = typeof option === "string" ? option : option.value; return <button type="button" onClick={() => value.startsWith("tel:") || value.startsWith("mailto:") ? window.open(value, "_self") : sendMessage(value)} disabled={typing} key={`${label}-${index}`}>{label}</button>; })}</div></div>}
                  </div>
                  {message.role === "user" && <span className={styles.avatar} aria-hidden="true"><UserRound size={15} /></span>}
                </div>
              ))}
              {typing && <div className={styles.messageRow} aria-label={t("Asistan yazıyor", "Assistant is typing")}><span className={styles.avatar}><Image src="/agartha-chatbot-logo.png" width={28} height={28} alt="" unoptimized /></span><span className={`${styles.bubble} ${styles.typing}`}><span /><span /><span /></span></div>}
            </div>

            <div className={styles.composer}>
              <div className={styles.quickPrompts} aria-label={t("Hızlı seçenekler", "Quick options")}>
                {getChatbotQuickPrompts(lang, memory).slice(0, 4).map((prompt) => <button className={styles.quickPrompt} type="button" onClick={() => sendMessage(prompt.value)} disabled={typing} key={prompt.value}>{prompt.label}</button>)}
                <a className={styles.quickLink} href="tel:+908504204202"><Phone size={12} />{t("Uzman", "Expert")}</a>
                <a className={styles.quickLink} href="mailto:bilgi@agarthateknoloji.com.tr"><Mail size={12} />E-posta</a>
              </div>
              <form className={styles.form} onSubmit={submit}>
                <textarea className={styles.input} ref={inputRef} value={input} rows={1} maxLength={700} placeholder={t("Aklınızdaki soruyu yazın…", "Ask what you have in mind…")} aria-label={t("Mesajınız", "Your message")} onChange={(event) => setInput(event.target.value)} onKeyDown={handleTextareaKeyDown} />
                <button className={styles.send} type="submit" disabled={!input.trim() || typing} aria-label={t("Mesajı gönder", "Send message")}><Send size={18} /></button>
              </form>
              <p className={styles.disclaimer}>{t("Yanıtlar bilgilendirme amaçlıdır • Sohbeti dilediğiniz zaman temizleyebilirsiniz", "Responses are informational • You can clear the chat anytime")}</p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
      <button className={styles.launcher} type="button" aria-label={open ? t("Sohbeti kapat", "Close chat") : t("Agartha Asistanı aç", "Open Agartha Assistant")} aria-expanded={open} onClick={() => setOpen((current) => !current)}><Image src="/agartha-chatbot-logo.png" width={64} height={64} alt="" unoptimized /><span className={styles.onlineDot} /><span className={styles.launcherBadge}>{open ? <X size={13} /> : <MessageCircle size={13} />}</span></button>
    </div>
  );
}
