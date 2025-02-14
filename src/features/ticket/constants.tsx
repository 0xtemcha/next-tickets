import { LucideCheckCircle, LucideFileText, LucidePencil } from "lucide-react";

export const TICKET_ICONS = {
  OPEN: <LucideFileText className="w-4 h-4" />,
  DONE: <LucideCheckCircle className="w-4 h-4" />,
  IN_PROGRESS: <LucidePencil className="w-4 h-4" />,
};

export const TICKET_STATUS_LABELS = {
  OPEN: "Open",
  DONE: "Done",
  IN_PROGRESS: "In Progress",
};
