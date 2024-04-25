import type { Dispatch, SetStateAction } from "react";

import type { WeekdaysItemType } from "./weekdays";

export type CalendarType = "weeks" | "months" | "years";

export type CalendarHeadType = {
  year: number;
  month: number;
  type: CalendarType;
  handleMonthChange: (amount: number) => VoidFunction;
  handleYearChange: (amount: number) => VoidFunction;
  handleCalendarTypeChange: VoidFunction;
};

export type CalendarBodyType = {
  year: number;
  month: number;
  type: CalendarType;
  setDate: Dispatch<SetStateAction<Date>>;
  fromRange?: Date;
  setFromRange: Dispatch<SetStateAction<Date>>;
  toRange?: Date;
  setToRange: Dispatch<SetStateAction<Date>>;
  maxValue?: string;
  minValue?: string;
  isHolidaysVisible: boolean;
  isWeekendsVisible: boolean;
  startWeekday: WeekdaysItemType;
};

export type CalendarBodyWeeksType = Omit<CalendarBodyType, "type">;

export type CalendarCellType = {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
  outside: boolean;
  weekend: boolean;
  holiday: boolean;
  fromRange?: Date;
  setFromRange: Dispatch<SetStateAction<Date>>;
  toRange?: Date;
  setToRange: Dispatch<SetStateAction<Date>>;
};
