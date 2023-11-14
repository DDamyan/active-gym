import { component$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { prisma } from "~/utilities/prisma";

const createUser = server$(async () => {
  const newUser = await prisma.user.create({
    data: {
      email: "ddamyanov@inneo.com",
      name: "DDA",
    },
  });

  console.log("created User:", newUser);
  return newUser;
});

export default component$(() => {
  return (
    <div class="text-center">
      <button onClick$={() => createUser()}>TEST-CONNECTION</button>
    </div>
  );
});
