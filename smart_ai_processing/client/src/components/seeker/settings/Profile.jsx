// src/components/seeker/settings/Profile.jsx
/* eslint-disable react/prop-types */
import { formatReadableDate } from "@/lib/utils";
import { useFileUpload } from "@/hooks/useFileUpload";
import { useFormSchema } from "@/hooks/useFormSchema";
import { useSeekerStore } from "@/store/useSeekerStore";
import { useSetFormData } from "@/hooks/useSetFormData";
import { updateProfileControl as formControl } from "@/config";
import { DialogUpdateForm } from "@/components/DialogUpdateForm";
import SingleUploadForm from "@/components/form/SingleUploadForm";

const Profile = ({ profile }) => {
  const { updateSeekerProfile, updating } = useSeekerStore();
  const avatarForm = useFormSchema(profile, null, updateSeekerProfile);
  useSetFormData(profile, avatarForm);

  const { singleUpload } = useFileUpload(
    avatarForm.setFieldValue,
    avatarForm.values,
    updateSeekerProfile
  );

  return (
    <section className="py-6">
      <div className="grid grid-cols-10 gap-6">
        <div className="col-span-10 md:col-span-3">
          <div className="flex justify-center w-full">
            <div className="space-y-4 max-w-60">
              <div className="overflow-hidden">
                <img src={profile.avatar} alt="avatar" />
              </div>
              <SingleUploadForm
                loading={updating}
                action={singleUpload}
                inputName="avatar"
                buttonTitle="Change photo"
              />
            </div>
          </div>
        </div>
        <div className="col-span-10 md:col-span-7 space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="text-xl font-semibold">Personal Information</h4>
            <DialogUpdateForm
              data={profile}
              loading={updating}
              title="Edit Profile"
              formControl={formControl}
              action={updateSeekerProfile}
            />
          </div>
          <div className="space-y-3">
            {[
              { label: "Name", value: profile.name },
              { label: "Email", value: profile.email },
              { label: "Gender", value: profile.gender },
              {
                label: "Birthday",
                value: formatReadableDate(profile.birthday),
              },
              { label: "Bio", value: profile.bio },
            ].map((item, index) => (
              <div key={index}>
                <label className="block text-sm font-medium text-gray-700">
                  {item.label}
                </label>
                <p className="mt-1 text-sm text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
