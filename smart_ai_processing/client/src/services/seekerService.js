import handleError from "./handleError";
import { privateApi } from "../api/privateApi";

const seekerService = {
  applyToJob: async (jobId, formData) => {
    return privateApi
      .post(`/jobs/${jobId}/apply`, formData)
      .then((res) => res.data.message)
      .catch(handleError);
  },

  getProfile: async () => {
    return privateApi
      .get("/seeker/profile")
      .then((res) => res.data)
      .catch(handleError);
  },

  updateProfile: async (formData) => {
    return privateApi
      .put("/seeker/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data.message)
      .catch(handleError);
  },

  getJobApplications: async () => {
    return privateApi
      .get("/seeker/applications")
      .then((res) => res.data)
      .catch(handleError);
  },

  addExperience: async (formData) => {
    return privateApi
      .post("/seeker/profile/experience", formData)
      .then((res) => res.data.message)
      .catch(handleError);
  },

  updateExperience: async (formData, id) => {
    return privateApi
      .put(`/seeker/profile/experience/${id}`, formData)
      .then((res) => res.data.message)
      .catch(handleError);
  },
};

export default seekerService;
