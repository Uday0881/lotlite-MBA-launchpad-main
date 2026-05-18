export type LeadSubmission = {
  fullName: string;
  email: string;
  phone: string;
  programInterest: string;
  source?: string;
};

type SheetResponse = {
  success: boolean;
  error?: string;
};

export async function submitLead(data: LeadSubmission): Promise<void> {
  const url = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  if (!url) {
    throw new Error("Form is not configured yet. Add VITE_GOOGLE_SCRIPT_URL to your .env file.");
  }

  try {
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        ...data,
        source: data.source ?? "homepage",
        submittedAt: new Date().toISOString(),
      }),
    });
  } catch (error) {
    throw new Error("Network error. Please check your connection and try again.");
  }
}
