import { $, component$, useSignal } from "@builder.io/qwik";
import { log } from "console";

export default component$(() => {
  const counter = useSignal(0);

  const setCount = $((newValue: number) => {
    console.log("-+ counter -+");

    counter.value = newValue;
  });

  return (
    <div class="text-center">
      <h2>TEST:</h2>
      <h3>{counter.value}</h3>
      <button onClick$={() => setCount(counter.value + 1)}>+</button>
      <button onClick$={() => setCount(counter.value - 1)}>-</button>
    </div>
  );
});
