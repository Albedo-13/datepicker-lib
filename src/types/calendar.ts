import type { Dispatch, SetStateAction } from "react";

import type { WeekdaysItemType } from "./weekdays";

export type CalendarHeadType = {
  year: number;
  month: number;
  handleMonthChange: (amount: number) => () => void;
  handleYearChange: (amount: number) => () => void;
};

export type CalendarBodyType = {
  year: number;
  month: number;
  setDate: Dispatch<SetStateAction<Date>>;
  fromRange: Date | null;
  setFromRange: Dispatch<SetStateAction<Date | null>>;
  toRange: Date | null;
  setToRange: Dispatch<SetStateAction<Date | null>>;
  startWeekday: WeekdaysItemType;
};

export type CalendarCellType = {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
  outside: boolean;
  weekend: boolean;
  fromRange: Date | null;
  setFromRange: Dispatch<SetStateAction<Date | null>>;
  toRange: Date | null;
  setToRange: Dispatch<SetStateAction<Date | null>>;
};
