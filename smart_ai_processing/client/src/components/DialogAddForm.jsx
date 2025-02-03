/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import InputForm from "./form/InputForm";
import ButtonForm from "./form/ButtonForm";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export function DialogAddForm({ title, formik, formControl, loading }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus size={16} />
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-0">
        <div className="p-4">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Click save when you&apos;re done.
          </DialogDescription>
        </div>
        <ScrollArea className="h-72 border">
          <div className="p-4">
            <InputForm formik={formik} formControl={formControl}>
              <div className="flex justify-end gap-2 p-2">
                <DialogClose asChild>
                  <Button variant="destructive" type="button">
                    Cancel
                  </Button>
                </DialogClose>
                <ButtonForm
                  formik={formik}
                  loading={loading}
                  title={"Save changes"}
                />
              </div>
            </InputForm>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
