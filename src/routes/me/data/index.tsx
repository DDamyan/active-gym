import { RequestHandler } from "@builder.io/qwik-city";

interface TestData {
  value: string;
  date: Date;
}

export const onGet: RequestHandler = async ({ json }) => {
  json(200, {
    value: "asd",
    date: new Date(),
  });
};

// TODO: Server$ - https://qwik.builder.io/docs/server$/
