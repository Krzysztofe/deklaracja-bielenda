import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import useWindowWidth from "./useWindowWidth";

describe("useWindowWidth", () => {
  test("should return window width", () => {
    global.innerWidth = 1024;
    const { result } = renderHook(() => useWindowWidth());
    expect(result.current.windowWidth).toBe(1024);
  });

  test("should update window width on resize", () => {
    const { result } = renderHook(() => useWindowWidth());
    expect(result.current.windowWidth).toBe(window.innerWidth);
    act(() => {
      global.innerWidth = 768;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current.windowWidth).toBe(768);
    act(() => {
      global.innerWidth = 480;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current.windowWidth).toBe(480);
  });

  test("should clean event listener on unmount", () => {
    const addEventListenerSpy = jest.spyOn(window, "addEventListener");
    const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");
    const { unmount } = renderHook(() => useWindowWidth());

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function)
    );

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function)
    );

    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });
});
