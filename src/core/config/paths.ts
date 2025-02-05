import { navigate } from "astro:transitions/client";

export const paths = {
  login: {
    getHref: () => "/",
    push: () => navigate("/"),
  },
  home: {
    getHref: () => "/home",
    push: () => navigate("/home"),
  },
  user: {
    getHref: () => "/user",
    push: () => navigate("/user"),
  },
};
