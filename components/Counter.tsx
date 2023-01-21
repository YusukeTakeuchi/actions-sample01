import { useState } from "react";

interface CounterProps {
  initialValue: number;
}

export function useCounter(initialValue: number) {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    increment: () => { setValue((v) => v+1) },
    decrement: () => { setValue((v) => v-1) },
  }
}

export function Counter(props: CounterProps) {
  const { value, increment, decrement } = useCounter(props.initialValue);

  return (
    <div>
      <output>{value}</output>
      <input type="button" value="+" onClick={increment} />
      <input type="button" value="-" onClick={decrement} />
    </div>
  )
}