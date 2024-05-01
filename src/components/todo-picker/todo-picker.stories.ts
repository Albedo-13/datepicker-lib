import type { Meta } from "@storybook/react";

import { TodoPicker } from "./todo-picker";

export default {
  title: "MyGroup/TodoPicker",
  component: TodoPicker,
  tags: ["autodocs"],
} satisfies Meta<typeof TodoPicker>;

export const DefaultDatePicker = {
  args: {
    value: null,
    maxValue: null,
    minValue: null,
    startFromMonday: true,
    isHolidaysVisible: true,
    isWeekendsVisible: true,
  },
};
