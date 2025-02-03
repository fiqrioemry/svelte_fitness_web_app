import WebLogo from "../WebLogo";
import {
  employerRegisterForm as formData,
  employerRegisterControl as formControl,
} from "@/config";

import { Card } from "@/components/ui/card";
import { newValidationSchema } from "@/lib/utils";
import InputForm from "@/components/form/InputForm";
import { useAuthStore } from "@/store/useAuthStore";
import { Link, useNavigate } from "react-router-dom";
import ButtonForm from "@/components/form/ButtonForm";
import { useFormSchema } from "@/hooks/useFormSchema";

const SeekerForm = () => {
  const navigate = useNavigate();
  const { employerRegister, loading } = useAuthStore();
  const validation = newValidationSchema(formControl);
  const registerForm = useFormSchema(
    formData,
    validation,
    employerRegister,
    navigate
  );

  return (
    <Card className="w-full max-w-lg p-4 space-y-6">
      <div className="text-center">
        <WebLogo />
      </div>
      <InputForm formik={registerForm} formControl={formControl}>
        <ButtonForm
          formik={registerForm}
          loading={loading}
          title={"Register"}
        />
      </InputForm>
      <div className="text-center text-sm">
        Already have an account ? login{" "}
        <Link to="/auth/login" className="text_button">
          here
        </Link>
      </div>
    </Card>
  );
};

export default SeekerForm;
