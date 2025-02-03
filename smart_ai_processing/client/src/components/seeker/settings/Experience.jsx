/* eslint-disable react/prop-types */
// src/components/seeker/settings/Experience.jsx
import {
  experienceForm as formData,
  experienceControl as formControl,
} from "@/config";
import { useFormSchema } from "@/hooks/useFormSchema";
import { useSeekerStore } from "@/store/useSeekerStore";
import { DialogAddForm } from "@/components/DialogAddForm";
import { DialogUpdateForm } from "@/components/DialogUpdateForm";
import { formatReadableDate, newValidationSchema } from "@/lib/utils";

const Experience = ({ experience }) => {
  const validations = newValidationSchema(formControl);
  const { addExperience, updateExperience, updating } = useSeekerStore();
  const addExpForm = useFormSchema(formData, validations, addExperience);

  return (
    <section className="p-6 bg-white shadow-md rounded-lg mx-auto">
      <div className="flex justify-end mb-4">
        <DialogAddForm
          formik={addExpForm}
          loading={updating}
          title="Add experience"
          formControl={formControl}
        />
      </div>
      <div>
        {experience.length === 0 ? (
          <div className="h-[60vh] flex items-center justify-center">
            You dont have any experience, try to add one
          </div>
        ) : (
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg flex justify-between items-center"
              >
                <div>
                  <h4>{exp.title}</h4>
                  <h5>{exp.company}</h5>
                  <h6>
                    {formatReadableDate(exp.start_date)} –{" "}
                    {formatReadableDate(exp.end_date)}
                  </h6>
                </div>
                <div className="flex gap-4">
                  <DialogUpdateForm
                    data={exp}
                    title="Edit"
                    loading={updating}
                    action={updateExperience}
                    formControl={formControl}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
