import { useEffect } from "react";
import PageError from "../components/PageError";
import { useJobStore } from "../store/useJobStore";
import PageLoading from "../components/PageLoading";
import JobsListHero from "../components/job_lists/JobsListHero";
import JobListsPreview from "../components/job_lists/JobListsPreview";

const JobLists = () => {
  const { fetchAllJobs, jobs, loading, error } = useJobStore();

  useEffect(() => {
    fetchAllJobs();
  }, [fetchAllJobs]);
  return (
    <section>
      <JobsListHero />
      {loading ? (
        <PageLoading />
      ) : error ? (
        <PageError />
      ) : (
        <JobListsPreview jobs={jobs} />
      )}
    </section>
  );
};

export default JobLists;
