"use client";

import { Ticket } from "@prisma/client";
import { useActionState } from "react";
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

  const [actionState, action] = useActionState(
    upsertTicket.bind(null, ticket?.id),
    { message: "" }
  );

  return (
    <form action={action} className="flex flex-col gap-y-2">
      {/* remove */}
      {/* <Input name="id" type="hidden" defaultValue={ticket.id} /> */}

      <Label htmlFor="title">Title</Label>
      <Input
        id="title"
        name="title"
        type="text"
        defaultValue={
          (actionState.payload?.get("title") as string) ?? ticket?.title
        }
      />

      <Label htmlFor="content">Content</Label>
      <Textarea
        id="content"
        name="content"
        defaultValue={
          (actionState.payload?.get("content") as string) ?? ticket?.content
        }
      />

      <SubmitButton label={ticket ? "Edit" : "Create"} />

      {actionState.message}
    </form>
  );
};

export { TicketUpsertForm };
