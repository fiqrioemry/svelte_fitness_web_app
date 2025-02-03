import { create } from "zustand";
import toast from "react-hot-toast";
import jobService from "../services/jobService";

export const useJobStore = create((set) => ({
  jobs: [],
  job: null,
  applications: [],
  employerJobs: [],
  loading: false,
  error: null,

  fetchAllJobs: async () => {
    set({ loading: true });
    jobService
      .getAllJobs()
      .then((data) => set({ jobs: data || [] }))
      .catch((err) => {
        set({
          jobs: [],
          error: err.response?.message || "Something went wrong",
        });
      })
      .finally(() => set({ loading: false }));
  },

  fetchJobByID: async (id) => {
    set({ loading: true });
    jobService
      .getJobByID(id)
      .then((data) => set({ job: data }))
      .catch((err) => toast.error(err.message))
      .finally(() => set({ loading: false }));
  },

  applyToJob: async (id) => {
    set({ loading: true });
    jobService
      .applyToJob(id)
      .then((message) => toast.success(message))
      .catch((err) => toast.error(err.message))
      .finally(() => set({ loading: false }));
  },

  createJob: async (formData) => {
    set({ loading: true });
    jobService
      .createJob(formData)
      .then((message) => {
        toast.success(message);
        useJobStore.getState().fetchEmployerJobs();
      })
      .catch((err) => toast.error(err.message))
      .finally(() => set({ loading: false }));
  },

  fetchEmployerJobs: async () => {
    set({ loading: true });
    jobService
      .getAllEmployerPostedJobs()
      .then((data) => set({ employerJobs: data }))
      .catch((err) => toast.error(err.message))
      .finally(() => set({ loading: false }));
  },

  updateJob: async (id, formData) => {
    set({ loading: true });
    jobService
      .updateJob(id, formData)
      .then((message) => toast.success(message))
      .catch((err) => toast.error(err.message))
      .finally(() => set({ loading: false }));
  },

  deleteJob: async (id) => {
    set({ loading: true });
    jobService
      .deleteJob(id)
      .then((message) => {
        toast.success(message);
        useJobStore.getState().fetchEmployerJobs();
      })
      .catch((err) => toast.error(err.message))
      .finally(() => set({ loading: false }));
  },
}));
