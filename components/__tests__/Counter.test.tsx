import { useCounter, Counter } from '../Counter';
import { render, screen } from "@testing-library/react";
import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils';

describe("useCounter", () => {
  it("初期値が設定できること", () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.value).toBe(5);
  })

  it("インクリメントで値が+1されること", () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => { result.current.increment() });
    expect(result.current.value).toBe(6);
  })

  it("デクリメントで値が-1されること", () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => { result.current.decrement() });
    expect(result.current.value).toBe(4);
  })
})