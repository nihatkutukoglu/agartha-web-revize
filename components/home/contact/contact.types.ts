export type SolutionOption =
  | "ctm-erp"
  | "bosseye"
  | "yalin-ebms"
  | "a-charge"
  | "custom-software"
  | "other";

export type RequestType =
  | "demo"
  | "offer"
  | "product-info"
  | "technical-meeting"
  | "partnership"
  | "other";

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  solution: SolutionOption | "";
  requestType: RequestType | "";
  message: string;
  privacyAccepted: boolean;
  website: string;
}

export interface ContactFormErrors {
  fullName?: string;
  company?: string;
  email?: string;
  solution?: string;
  requestType?: string;
  message?: string;
  privacyAccepted?: string;
}

export type ContactFormStatus =
  | "idle"
  | "submitting"
  | "success";

export interface ContactSubmissionResult {
  success: true;
}
