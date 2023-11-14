import { $, component$, useSignal } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { appendFileSync } from "fs";

const doubleIt = server$((counter: number) => {
  const doubleValue = Math.pow(counter, 2);
  console.log("doubleValue", doubleValue);
  appendFileSync(
    "C:\\Users\\ddmin\\Desktop\\Source\\active-gym\\src\\routes\\me\\test.txt",
    "\n" + doubleValue.toString(),
  );
  return doubleValue;
});

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
      <div>
        <button onClick$={async () => setCount(await doubleIt(counter.value))}>
          Double It!
        </button>
      </div>
    </div>
  );
});
