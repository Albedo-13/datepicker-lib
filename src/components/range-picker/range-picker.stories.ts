import type { Meta } from "@storybook/react";

import { RangePicker } from "./range-picker";

export default {
  title: "MyGroup/RangePicker",
  component: RangePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof RangePicker>;

export const DefaultRangePicker = {
  args: {
    value: "19/12/2024",
    maxValue: "10/01/2026",
    minValue: "20/02/2020",
    startFromMonday: true,
    isHolidaysVisible: true,
    isWeekendsVisible: true,
  },
};
