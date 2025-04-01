import { create } from "zustand";

type HttpRequest = {
  isLoading: boolean;
  error: string | null | unknown;
  sendRequest: (
    requestConfig: any,
    returnData: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
};

const useHttpRequestStore = create<HttpRequest>(set => ({
  isLoading: false,
  error: null,
  sendRequest: async (
    requestConfig: any,
    returnData: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    set({ isLoading: true, error: null });

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method || "GET",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw Error("Błąd. Ponów próbę");
      }
      returnData(response.ok);
      const responseData = await response.json();
      return responseData;
    } catch (err) {
      set({ error: err });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useHttpRequestStore;
