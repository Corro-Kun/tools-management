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
  lend: {
    getHref: () => "/lend",
    push: () => navigate("/lend"),
  },
  return: {
    getHref: () => "/return",
    push: () => navigate("/return"),
  },
  tool: {
    getHref: () => "/tool",
    push: () => navigate("/tool"),
  },
  user: {
    getHref: () => "/user",
    push: () => navigate("/user"),
  },
};
