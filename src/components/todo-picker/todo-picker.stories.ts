import type { Meta } from "@storybook/react";

import { TodoPicker } from "./todo-picker";

export default {
  title: "MyGroup/TodoPicker",
  component: TodoPicker,
  tags: ["autodocs"],
} satisfies Meta<typeof TodoPicker>;

export const DefaultDatePicker = {
  args: {
    value: "19/12/2024",
    maxValue: "10/01/2026",
    minValue: "20/02/2020",
    startFromMonday: true,
    isHolidaysVisible: true,
    isWeekendsVisible: true,
  },
};
