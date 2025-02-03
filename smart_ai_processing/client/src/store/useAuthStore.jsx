import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";
import authService from "../services/authService";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      profile: null,
      loading: false,
      experience: null,
      isAuthenticate: null,

      userAuthCheck: async () => {
        try {
          const user = await authService.userAuthCheck();
          set({ user: user, isAuthenticate: true });
        } catch {
          set({ user: null, isAuthenticate: false });
        }
      },

      seekerRegister: async (formData, navigate) => {
        set({ loading: true });
        try {
          const message = await authService.seekerRegister(formData);
          toast.success(message);
          navigate("/auth/login");
        } catch (error) {
          toast.error(error.message);
        } finally {
          set({ loading: false });
        }
      },

      employerRegister: async (formData, navigate) => {
        set({ loading: true });
        try {
          const message = await authService.employerRegister(formData);
          toast.success(message);
          navigate("/auth/login");
        } catch (error) {
          toast.error(error.message);
        } finally {
          set({ loading: false });
        }
      },

      userLogin: async (formData) => {
        set({ loading: true });
        try {
          const response = await authService.userLogin(formData);
          toast.success(response.message);
          useAuthStore.getState().userAuthCheck();
        } catch (error) {
          toast.error(error.message);
        } finally {
          set({ loading: false });
        }
      },

      userLogout: () => {
        authService.userLogout();
        set({ user: null, isAuthenticate: false });
        useAuthStore.persist.clearStorage();
      },

      getProfile: async () => {
        set({ loading: true });
        try {
          const profileData = await authService.getProfile();
          set({ profile: profileData });
        } catch (error) {
          toast.error(error.message);
        } finally {
          set({ loading: false });
        }
      },

      updateProfile: async (formData) => {
        set({ loading: true });
        try {
          const message = await authService.updateProfile(formData);
          toast.success(message);
          await get().getProfile();
        } catch (error) {
          toast.error(error.message);
        } finally {
          set({ loading: false });
        }
      },

      addExperience: async (formData) => {
        set({ loading: true });
        try {
          const message = await authService.addExperience(formData);
          toast.success(message);
          await get().getProfile();
        } catch (error) {
          toast.error(error.message);
        } finally {
          set({ loading: false });
        }
      },

      updateExperience: async (id, formData) => {
        set({ loading: true });
        try {
          const message = await authService.updateExperience(id, formData);
          toast.success(message);
          await get().getProfile();
        } catch (error) {
          toast.error(error.message);
        } finally {
          set({ loading: false });
        }
      },
    }),
    {
      name: "auth-store",
      getStorage: () => sessionStorage(),
      partialize: (state) => ({
        user: state.user,
        isAuthenticate: state.isAuthenticate,
      }),
    }
  )
);
