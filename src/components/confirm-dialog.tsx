import { cloneElement, type ReactElement, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";

type UseConfirmDialogArgs = {
  title?: string;
  description?: string;
  action: (payload: FormData) => void;
  trigger: React.ReactElement;
};

const useConfirmDialog = ({
  title = "Are you absolutely sure?",
  description = "This action cannot be undone. Make sure you understand the consequences.",
  action,
  trigger,
}: UseConfirmDialogArgs) => {
  const [isOpen, setIsOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dialogTrigger = cloneElement(trigger as ReactElement<any>, {
    onClick: () => setIsOpen((state) => !state),
  });

  const dialog = (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <form action={action}>
            <AlertDialogAction asChild>
              <Button type="submit" variant={"ghost"}>
                Confirm
              </Button>
            </AlertDialogAction>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );

  return [dialogTrigger, dialog] as const;
};

export { useConfirmDialog };
