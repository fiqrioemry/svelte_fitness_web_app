import { useEffect } from "react";
import PageError from "@/components/PageError";
import { useJobStore } from "@/store/useJobStore";
import PageLoading from "@/components/PageLoading";
import CompaniesHero from "@/components/companies/CompaniesHero";
import CompaniesListPreview from "@/components/companies/CompaniesListPreview";

const JobLists = () => {
  const { fetchAllJobs, jobs, loading, error } = useJobStore();

  useEffect(() => {
    fetchAllJobs();
  }, []);

  return (
    <section>
      <CompaniesHero />
      {loading ? (
        <PageLoading />
      ) : error !== null ? (
        <PageError />
      ) : (
        <CompaniesListPreview jobs={jobs} />
      )}
    </section>
  );
};

export default JobLists;
