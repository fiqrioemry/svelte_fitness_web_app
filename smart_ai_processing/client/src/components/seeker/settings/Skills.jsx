/* eslint-disable react/prop-types */
import { useSeekerStore } from "@/store/useSeekerStore";
import { updateSkillsControl as formControl } from "@/config";
import { DialogUpdateForm } from "@/components/DialogUpdateForm";

const Skills = ({ profile }) => {
  const { updateSeekerProfile, updating } = useSeekerStore();

  return (
    <section className="p-6 bg-white shadow-md rounded-lg mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold">Skills</h4>
        <div className="flex gap-2">
          <DialogUpdateForm
            data={profile}
            loading={updating}
            title="Add Skills"
            formControl={formControl}
            action={updateSeekerProfile}
          />
        </div>
      </div>
      <div>
        {profile.skills.length === 0 ? (
          <div className="h-[60vh] flex items-center justify-center">
            <h4 className="text-gray-600">
              You don’t have any skills, try to add one
            </h4>
          </div>
        ) : (
          <div className="flex flex-wrap gap-3">
            {profile.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
