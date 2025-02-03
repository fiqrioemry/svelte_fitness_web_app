import { create } from "zustand";
import toast from "react-hot-toast";
import seekerService from "../services/seekerService";

export const useSeekerStore = create((set) => ({
  profile: [],
  experience: [],
  applications: [],
  loading: false,
  updating: false,
  error: null,

  fetchSeekerProfile: async () => {
    set({ loading: true });
    seekerService
      .getProfile()
      .then((data) => set({ profile: data }))
      .catch((err) => set({ error: err.response?.message }))
      .finally(() => set({ loading: false }));
  },

  updateSeekerProfile: async (form) => {
    set({ updating: true });
    seekerService
      .updateProfile(form)
      .then((message) => {
        toast.success(message);
        useSeekerStore.getState().fetchSeekerProfile();
      })
      .catch((err) => toast.error(err.message))
      .finally(() => set({ updating: false }));
  },

  fetchJobApplications: async () => {
    set({ loading: true });
    seekerService
      .getJobApplications()
      .then((data) => set({ applications: data }))
      .catch((err) => set({ error: err.response?.message }))
      .finally(() => set({ loading: false }));
  },

  applyToJob: async (jobId, formData) => {
    set({ loading: true });
    seekerService
      .applyToJob(jobId, formData)
      .then((message) => {
        toast.success(message);
        useSeekerStore.getState().fetchJobApplications();
      })
      .catch((err) => toast.error(err.message))
      .finally(() => set({ loading: false }));
  },

  addExperience: async (formData) => {
    set({ loading: true });
    seekerService
      .addExperience(formData)
      .then((message) => {
        toast.success(message);
        useSeekerStore.getState().fetchSeekerProfile();
      })
      .catch((err) => toast.error(err.message))
      .finally(() => set({ loading: false }));
  },

  updateExperience: async (formData, experienceId) => {
    console.log(formData);
    set({ updating: true });
    seekerService
      .updateExperience(formData, experienceId)
      .then((message) => {
        toast.success(message);
        useSeekerStore.getState().fetchSeekerProfile();
      })
      .catch((err) => toast.error(err.message))
      .finally(() => set({ updating: false }));
  },
}));
