"use client";

import { Ticket } from "@prisma/client";
import { SubmitButton } from "@/components/form/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { upsertTicket } from "../actions/upsert-ticket";

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  // Use the useTransition hook to wrap the upsertTicket action and show loader in submit btn
  // const [isPending, startTransition] = useTransition();
  // const upsertTicketAction = (formData: FormData) => {
  //   startTransition(async () => {
  //     await upsertTicket.bind(null, ticket?.id)(formData);
  //   });
  // };

  return (
    <form
      action={upsertTicket.bind(null, ticket?.id)}
      className="flex flex-col gap-y-2"
    >
      {/* remove */}
      {/* <Input name="id" type="hidden" defaultValue={ticket.id} /> */}

      <Label htmlFor="title">Title</Label>
      <Input id="title" name="title" type="text" defaultValue={ticket?.title} />

      <Label htmlFor="content">Content</Label>
      <Textarea id="content" name="content" defaultValue={ticket?.content} />

      <SubmitButton label={ticket ? "Edit" : "Create"} />
    </form>
  );
};

export { TicketUpsertForm };
