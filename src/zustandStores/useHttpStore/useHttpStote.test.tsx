import { act } from "@testing-library/react";
import useHttpRequestStore from "./useHttpStore";

global.fetch = jest.fn();

describe("useHttpRequestStore", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should have the correct initial state", () => {
    const state = useHttpRequestStore.getState();
    expect(state.isLoading).toBe(false);
    expect(state.error).toBeNull();
  });

  it("should update isLoading while sending a request", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ data: "mockData" }),
    });

    const returnDataMock = jest.fn();
    const { sendRequest } = useHttpRequestStore.getState();

    act(() => {
      sendRequest({ url: "/test" }, returnDataMock);
    });

    expect(useHttpRequestStore.getState().isLoading).toBe(true);

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(useHttpRequestStore.getState().isLoading).toBe(false);
    expect(returnDataMock).toHaveBeenCalledWith(true);
  });

  it("should handle request errors and update error state", async () => {
    (fetch as jest.Mock).mockRejectedValue(new Error("Network error"));

    const returnDataMock = jest.fn();
    const { sendRequest } = useHttpRequestStore.getState();

    await act(async () => {
      sendRequest({ url: "/test" }, returnDataMock);
    });

    expect(useHttpRequestStore.getState().error).toBeInstanceOf(Error);
    expect(useHttpRequestStore.getState().isLoading).toBe(false);
    expect(returnDataMock).not.toHaveBeenCalled();
  });
});
