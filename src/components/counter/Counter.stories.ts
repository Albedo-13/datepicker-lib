import type { Meta } from "@storybook/react";

import { Counter } from "./Counter";

export default {
  title: "MyGroup/Counter",
  component: Counter,
  tags: ["autodocs"],
} satisfies Meta<typeof Counter>;


export const DefaultCounter = {
  // args: {
  //   primary: true,
  //   label: 'Counter',
  // },
};
