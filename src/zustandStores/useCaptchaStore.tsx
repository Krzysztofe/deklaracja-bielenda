import { create } from "zustand";

type CaptchaStore = {
  isCaptcha: boolean;
  setCaptcha: (isCaptcha: boolean) => void;
};

export const useCaptchaStore = create<CaptchaStore>(set => ({
  isCaptcha: false,
  setCaptcha: isCaptcha => {
    set(state => ({ isCaptcha: isCaptcha }));
  },
}));
