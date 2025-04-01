import {create} from "zustand";

type FormClauseStore = {
  isConfirmed: boolean;
  setConfirmed: (isConfirmed: boolean) => void;
};

const useFormClauseStore = create<FormClauseStore>(set => ({
  isConfirmed: false,
  setConfirmed: isConfirmed => {
    set(state => ({ isConfirmed: isConfirmed }));
  },
}));

export default useFormClauseStore;
