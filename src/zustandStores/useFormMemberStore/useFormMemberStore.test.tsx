import { renderHook, act } from "@testing-library/react";
import { useFormMemberStore } from "./useFormMemberStore";

describe("useFormMemberStore", () => {
  test("initial state is correct", () => {
    const { result } = renderHook(() => useFormMemberStore());
    expect(result.current.isSubmited).toBe(false);
    expect(result.current.isError).toEqual({});
  });

  test("setSubmited updates the state correctly", () => {
    const { result } = renderHook(() => useFormMemberStore());
    act(() => {
      result.current.setSubmited(true);
    });
    expect(result.current.isSubmited).toBe(true);
  });

  test("setError updates the state correctly", () => {
    const { result } = renderHook(() => useFormMemberStore());
    const mockErrors = { name: "Required" };
    act(() => {
      result.current.setError(mockErrors);
    });
    expect(result.current.isError).toEqual(mockErrors);
  });

  test("setSubmited toggles back to false", () => {
    const { result } = renderHook(() => useFormMemberStore());
    act(() => {
      result.current.setSubmited(true);
    });
    expect(result.current.isSubmited).toBe(true);
    act(() => {
      result.current.setSubmited(false);
    });
    expect(result.current.isSubmited).toBe(false);
  });

  test("setError clears errors correctly", () => {
    const { result } = renderHook(() => useFormMemberStore());
    act(() => {
      result.current.setError({ name: "Required" });
    });
    expect(result.current.isError).toEqual({ name: "Required" });
    act(() => {
      result.current.setError({});
    });
    expect(result.current.isError).toEqual({});
  });
});
