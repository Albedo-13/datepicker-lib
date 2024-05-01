import type { Meta } from "@storybook/react";

import { RangePicker } from "./range-picker";

export default {
  title: "MyGroup/RangePicker",
  component: RangePicker,
  tags: ["autodocs"],
} satisfies Meta<typeof RangePicker>;

export const DefaultRangePicker = {
  args: {
    value: null,
    maxValue: null,
    minValue: null,
    startFromMonday: true,
    isHolidaysVisible: true,
    isWeekendsVisible: true,
  },
};
