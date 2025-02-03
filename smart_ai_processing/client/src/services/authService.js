import Cookies from "js-cookie";
import handleError from "./handleError";
import { publicApi } from "../api/publicApi";
import { privateApi } from "../api/privateApi";

const authService = {
  seekerRegister: async (formData) => {
    return publicApi
      .post("/register/seeker", formData)
      .then((res) => res.data.message)
      .catch(handleError);
  },

  employerRegister: async (formData) => {
    return publicApi
      .post("/register/employer", formData)
      .then((res) => res.data.message)
      .catch(handleError);
  },

  userLogin: async (formData) => {
    return publicApi
      .post("/login", formData)
      .then((res) => {
        Cookies.set("accessToken", res.data.access_token, { expires: 1 });
        return res.data;
      })
      .catch(handleError);
  },

  userAuthCheck: async () => {
    return privateApi
      .post("/me")
      .then((res) => {
        return res.data;
      })
      .catch(handleError);
  },

  userLogout: () => {
    Cookies.remove("accessToken");
  },

  getProfile: async () => {
    return privateApi
      .get("/seeker/profile")
      .then((res) => res.data)
      .catch(handleError);
  },

  updateProfile: async (formData) => {
    return privateApi
      .put("/seeker/profile", formData)
      .then((res) => res.data.message)
      .catch(handleError);
  },

  addExperience: async (formData) => {
    return privateApi
      .post("/seeker/profile/experience", formData)
      .then((res) => res.data.message)
      .catch(handleError);
  },

  updateExperience: async (id, formData) => {
    return privateApi
      .put(`/seeker/profile/experience/${id}`, formData)
      .then((res) => res.data.message)
      .catch(handleError);
  },
};

export default authService;
