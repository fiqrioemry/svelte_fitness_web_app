/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { UploadCloud } from "lucide-react";
import { useFormSchema } from "@/hooks/useFormSchema";
import { useFileUpload } from "@/hooks/useFileUpload";
import { useSetFormData } from "@/hooks/useSetFormData";
import { useSeekerStore } from "@/store/useSeekerStore";
import { Card, CardContent } from "@/components/ui/card";
import DocumentUploadForm from "@/components/form/DocumentUploadForm";

const Resume = ({ profile }) => {
  const { updateSeekerProfile, updating } = useSeekerStore();
  const addResumeForm = useFormSchema(profile, null, updateSeekerProfile);

  useSetFormData(profile, addResumeForm);

  const { singleUpload } = useFileUpload(
    addResumeForm.setFieldValue,
    addResumeForm.values,
    updateSeekerProfile
  );

  return (
    <section className="p-6 bg-white shadow-md rounded-lg mx-auto">
      <h4 className="text-lg font-semibold mb-4">Resume</h4>
      <div className="w-full max-w-4xl">
        <Card className="bg-blue-100 p-6 rounded-lg shadow-md">
          <CardContent className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <UploadCloud className="text-blue-600" size={24} />
              {profile.resume ? (
                <Link to={profile.resume} className="text-blue-600 font-medium">
                  {profile.resume}
                </Link>
              ) : (
                <span className="text-blue-600 font-medium">Upload resume</span>
              )}
            </div>
            <DocumentUploadForm
              inputName="resume"
              loading={updating}
              action={singleUpload}
            />
          </CardContent>
        </Card>
        <p className="text-md text-gray-700 mt-4">
          Make sure you upload the latest CV / Resume
        </p>
      </div>
    </section>
  );
};

export default Resume;
