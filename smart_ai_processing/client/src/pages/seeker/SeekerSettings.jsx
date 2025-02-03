import { useEffect } from "react";
import PageError from "@/components/PageError";
import { useSeekerStore } from "@/store/useSeekerStore";
import Resume from "@/components/seeker/settings/Resume";
import Skills from "@/components/seeker/settings/Skills";
import Profile from "@/components/seeker/settings/Profile";
import ContentLoading from "@/components/ContentLoading";
import Experience from "@/components/seeker/settings/Experience";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SeekerSettings = () => {
  const { fetchSeekerProfile, profile, loading, error } = useSeekerStore();

  useEffect(() => {
    fetchSeekerProfile();
  }, [fetchSeekerProfile]);

  const tabs = [
    {
      id: "profile",
      label: "Profile",
      component: <Profile profile={profile} />,
    },
    {
      id: "experience",
      label: "Experience",
      component: <Experience experience={profile.experience} />,
    },
    { id: "skills", label: "Skills", component: <Skills profile={profile} /> },
    { id: "resume", label: "Resume", component: <Resume profile={profile} /> },
  ];

  return (
    <section className="h-[84.5vh] overflow-y-scroll">
      {loading ? (
        <ContentLoading />
      ) : error ? (
        <PageError />
      ) : (
        <Tabs defaultValue="profile" className="w-full px-8">
          <TabsList className="w-[455px]">
            {tabs.map((tab) => (
              <TabsTrigger className="w-full" value={tab.id} key={tab.id}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent value={tab.id} key={tab.id}>
              {tab.component}
            </TabsContent>
          ))}
        </Tabs>
      )}
    </section>
  );
};

export default SeekerSettings;
