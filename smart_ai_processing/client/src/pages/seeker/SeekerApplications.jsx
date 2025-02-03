import { useEffect } from "react";
import PageError from "@/components/PageError";
import { Button } from "@/components/ui/button";
import { useSeekerStore } from "@/store/useSeekerStore";
import ContentLoading from "@/components/ContentLoading";
import JobApplicationCard from "../../components/seeker/JobApplicationCard";

const SeekerApplications = () => {
  const { fetchJobApplications, applications, loading, error } =
    useSeekerStore();

  useEffect(() => {
    fetchJobApplications();
  }, [fetchJobApplications]);

  console.log(applications);

  return (
    <section>
      <div className="container mx-auto overflow-y-hidden">
        <div className="h-[80vh] flex items-center justify-center">
          {loading ? (
            <div>
              <ContentLoading />
            </div>
          ) : error ? (
            <PageError />
          ) : applications.length === 0 ? (
            <div className="space-y-4 text-center">
              <h4>You Dont have job applications yet</h4>
              <Button>Find Jobs</Button>
            </div>
          ) : (
            <div>
              <JobApplicationCard application={applications} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SeekerApplications;
