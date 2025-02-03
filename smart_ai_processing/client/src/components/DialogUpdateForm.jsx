// src/components/DialogUpdateForm.jsx
/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogTitle,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newValidationSchema } from "@/lib/utils";
import InputForm from "@/components/form/InputForm";
import { useFormSchema } from "@/hooks/useFormSchema";
import ButtonForm from "@/components/form/ButtonForm";
import { useSetFormData } from "@/hooks/useSetFormData";
import { ScrollArea } from "@/components/ui/scroll-area";

export function DialogUpdateForm({
  title,
  data,
  action,
  loading,
  formControl,
}) {
  const validations = newValidationSchema(formControl);
  const formik = useFormSchema(data, validations, action, data.id);
  useSetFormData(data, formik);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-blue-600 border-blue-600 flex items-center gap-2 hover:bg-blue-100"
        >
          <Edit size={16} /> {title}
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
