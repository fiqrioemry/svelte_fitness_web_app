import { create } from "zustand";
import toast from "react-hot-toast";
import employerService from "../services/employerService";

export const useEmployerStore = create((set) => ({
  profile: null,
  jobs: [],
  applications: [],
  loading: false,
  error: null,

  fetchEmployerProfile: async () => {
    set({ loading: true });
    employerService
      .getProfile()
      .then((data) => set({ profile: data }))
      .catch((err) => set({ error: err.response?.message }))
      .finally(() => set({ loading: false }));
  },

  updateEmployerProfile: async (formData) => {
    set({ loading: true });
    employerService
      .updateProfile(formData)
      .then((message) => {
        toast.success(message);
        useEmployerStore.getState().fetchEmployerProfile();
      })
      .catch((err) => toast.error(err.message))
      .finally(() => set({ loading: false }));
  },

  fetchEmployerJobs: async () => {
    set({ loading: true });
    employerService
      .getAllEmployerPostedJobs()
      .then((data) => set({ jobs: data }))
      .catch((err) => set({ error: err.response?.message }))
      .finally(() => set({ loading: false }));
  },

  createJob: async (formData) => {
    set({ loading: true });
    employerService
      .createJob(formData)
      .then((message) => {
        toast.success(message);
        useEmployerStore.getState().fetchEmployerJobs();
      })
      .catch((err) => toast.error(err.message))
      .finally(() => set({ loading: false }));
  },

  updateJob: async (id, formData) => {
    set({ loading: true });
    employerService
      .updateJob(id, formData)
      .then((message) => {
        toast.success(message);
        useEmployerStore.getState().fetchEmployerJobs();
      })
      .catch((err) => toast.error(err.message))
      .finally(() => set({ loading: false }));
  },

  deleteJob: async (id) => {
    set({ loading: true });
    employerService
      .deleteJob(id)
      .then((message) => {
        toast.success(message);
        useEmployerStore.getState().fetchEmployerJobs();
      })
      .catch((err) => toast.error(err.message))
      .finally(() => set({ loading: false }));
  },

  fetchJobApplications: async (jobId) => {
    set({ loading: true });
    employerService
      .getEmployerJobApplications(jobId)
      .then((data) => set({ applications: data }))
      .catch((err) => set({ error: err.response?.message }))
      .finally(() => set({ loading: false }));
  },

  updateApplicationStatus: async (jobId, formData) => {
    set({ loading: true });
    employerService
      .updateApplicationStatus(jobId, formData)
      .then((message) => {
        toast.success(message);
        useEmployerStore.getState().fetchJobApplications(jobId);
      })
      .catch((err) => toast.error(err.message))
      .finally(() => set({ loading: false }));
  },
}));
