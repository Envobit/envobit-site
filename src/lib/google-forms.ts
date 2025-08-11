import type { GoogleFormsFieldMap } from "@/config/google-forms";
import {
  GOOGLE_FORM_ACTION_URL,
  GOOGLE_FORM_FIELDS,
} from "@/config/google-forms";

export type ContactFormPayload = {
  name: string;
  email: string;
  phone: string;
  companyName?: string;
  website?: string;
  budget: string;
  services: string[];
  message: string;
};

const toUrlEncodedBody = (
  data: ContactFormPayload,
  fields: GoogleFormsFieldMap,
): URLSearchParams => {
  const body = new URLSearchParams();
  body.append(fields.name, data.name);
  body.append(fields.email, data.email);
  body.append(fields.phone, data.phone);
  body.append(fields.companyName, data.companyName ?? "");
  body.append(fields.website, data.website ?? "");
  body.append(fields.budget, data.budget);
  body.append(
    fields.services,
    Array.isArray(data.services) ? data.services.join(", ") : "",
  );
  body.append(fields.message, data.message);
  return body;
};

export const submitToGoogleForms = async (
  data: ContactFormPayload,
): Promise<void> => {
  if (!GOOGLE_FORM_ACTION_URL) return; // no-op until configured
  try {
    const body = toUrlEncodedBody(data, GOOGLE_FORM_FIELDS);
    // no-cors: we don't get a readable response, but submission will be recorded
    await fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body,
    });
  } catch (err) {
    // ignore errors to avoid interfering with primary firestore submission
    // eslint-disable-next-line no-console
    console.log("google forms submit failed", err);
  }
};
