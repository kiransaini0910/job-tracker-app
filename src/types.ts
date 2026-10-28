export type Status = "Applied" | "Interview" | "Rejected" | "Offer";

export interface Job {
  id: number;
  company: string;
  role: string;
  status: Status;
  date: string;
}