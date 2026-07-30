"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ChevronRight,
  MessageCircle,
  Send,
  UserRound,
  X,
} from "lucide-react";
import {
  type FormEvent,
  type KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  chatbotQuickPrompts,
  getChatbotReply,
  type ChatAction,
  type ChatFollowUp,
} from "@/data/chatbot";
import styles from "./ChatbotWidget.module.css";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  content: string;
  action?: ChatAction;
  followUp?: ChatFollowUp;
};

const initialMessage: ChatMessage = {
  id: 1,
  role: "assistant",
  content:
    "Merhaba! Ben Agartha Teknoloji sanal asistanıyım. Size nasıl yardımcı olabilirim?",
};

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const messageId = useRef(1);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const responseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (open) {
      window.setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [open]);

  useEffect(() => {
    const container = messagesRef.current;
    if (!container) return;
    container.scrollTo({
      top: container.scrollHeight,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [messages, reduceMotion, typing]);

  useEffect(
    () => () => {
      if (responseTimer.current) clearTimeout(responseTimer.current);
    },
    [],
  );

  useEffect(() => {
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const sendMessage = (rawMessage: string) => {
    const message = rawMessage.trim().slice(0, 500);
    if (!message || typing) return;

    messageId.current += 1;
    setMessages((current) => [
      ...current,
      { id: messageId.current, role: "user", content: message },
    ]);
    setInput("");
    setTyping(true);

    const reply = getChatbotReply(message);
    responseTimer.current = setTimeout(
      () => {
        messageId.current += 1;
        setMessages((current) => [
          ...current,
          {
            id: messageId.current,
            role: "assistant",
            content: reply.message,
            action: reply.action,
            followUp: reply.followUp,
          },
        ]);
        setTyping(false);
      },
      reduceMotion ? 0 : 520,
    );
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  const handleTextareaKeyDown = (
    event: KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage(input);
    }
  };

  const followAction = (action: ChatAction) => {
    setOpen(false);
    window.setTimeout(() => {
      document.querySelector(action.target)?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    }, 120);
  };

  return (
    <div className={styles.root}>
      <AnimatePresence>
        {open && (
          <motion.section
            className={styles.panel}
            role="dialog"
            aria-modal="false"
            aria-label="Agartha Teknoloji sanal asistanı"
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 18, scale: 0.96 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 12, scale: 0.97 }
            }
            transition={{
              duration: reduceMotion ? 0.08 : 0.22,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <header className={styles.header}>
              <div className={styles.identity}>
                <span className={styles.identityLogo} aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/agartha-chatbot-logo.png" alt="" />
                </span>
                <span className={styles.identityText}>
                  <strong>Agartha Asistan</strong>
                  <span>Çevrim içi</span>
                </span>
              </div>
              <button
                className={styles.close}
                type="button"
                aria-label="Sohbeti kapat"
                onClick={() => setOpen(false)}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </header>

            <div
              className={styles.messages}
              ref={messagesRef}
              aria-live="polite"
            >
              {messages.map((message) => (
                <div
                  className={`${styles.messageRow} ${
                    message.role === "user" ? styles.messageRowUser : ""
                  }`}
                  key={message.id}
                >
                  {message.role === "assistant" && (
                    <span className={styles.avatar} aria-hidden="true">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/agartha-chatbot-logo.png" alt="" />
                    </span>
                  )}
                  <div className={styles.bubble}>
                    {message.content}
                    {message.action && (
                      <button
                        className={styles.messageAction}
                        type="button"
                        onClick={() => followAction(message.action!)}
                      >
                        {message.action.label}
                        <ChevronRight size={14} aria-hidden="true" />
                      </button>
                    )}
                    {message.followUp && (
                      <div className={styles.followUp}>
                        <p>{message.followUp.question}</p>
                        <div className={styles.followUpOptions}>
                          {message.followUp.options.map((option) => (
                            <button
                              type="button"
                              onClick={() => sendMessage(option)}
                              disabled={
                                typing ||
                                message.id !== messages[messages.length - 1]?.id
                              }
                              key={option}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  {message.role === "user" && (
                    <span className={styles.avatar} aria-hidden="true">
                      <UserRound size={15} />
                    </span>
                  )}
                </div>
              ))}

              {typing && (
                <div className={styles.messageRow} aria-label="Asistan yazıyor">
                  <span className={styles.avatar} aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/agartha-chatbot-logo.png" alt="" />
                  </span>
                  <span className={`${styles.bubble} ${styles.typing}`}>
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
              )}
            </div>

            <div className={styles.composer}>
              <div
                className={styles.quickPrompts}
                aria-label="Hızlı soru seçenekleri"
              >
                {chatbotQuickPrompts.map((prompt) => (
                  <button
                    className={styles.quickPrompt}
                    type="button"
                    onClick={() => sendMessage(prompt)}
                    disabled={typing}
                    key={prompt}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
              <form className={styles.form} onSubmit={submit}>
                <textarea
                  className={styles.input}
                  ref={inputRef}
                  value={input}
                  rows={1}
                  maxLength={500}
                  placeholder="Mesajınızı yazın..."
                  aria-label="Mesajınız"
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleTextareaKeyDown}
                />
                <button
                  className={styles.send}
                  type="submit"
                  disabled={!input.trim() || typing}
                  aria-label="Mesajı gönder"
                >
                  <Send size={18} aria-hidden="true" />
                </button>
              </form>
              <p className={styles.disclaimer}>
                Kural tabanlı sanal asistan • Yanıtlar bilgilendirme amaçlıdır.
              </p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <button
        className={styles.launcher}
        type="button"
        aria-label={open ? "Sohbeti kapat" : "Agartha Asistanı aç"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/agartha-chatbot-logo.png" alt="" />
        <span className={styles.onlineDot} aria-hidden="true" />
        <span className={styles.launcherBadge} aria-hidden="true">
          {open ? <X size={13} /> : <MessageCircle size={13} />}
        </span>
      </button>
    </div>
  );
}
