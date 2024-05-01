import type { Meta } from "@storybook/react";

import { DatePicker } from "./date-picker";

export default {
  title: "MyGroup/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof DatePicker>;

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
