import type { Meta } from "@storybook/react";

import { DatePicker } from "./date-picker";

export default {
  title: "MyGroup/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;


export const DefaultDatePicker = {
  args: {
    value: "19/12/2024",
    maxValue: "10/01/2026",
    minValue: "20/02/2020",
    startFromMonday: true,
  },
};
