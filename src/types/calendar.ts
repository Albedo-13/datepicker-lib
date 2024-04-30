import type { Dispatch, SetStateAction } from "react";

import type { WeekdaysItemType } from "./weekdays";

export type CalendarType = "weeks" | "months";

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
  setType: Dispatch<SetStateAction<CalendarType>>;
  fromRange?: Date;
  setFromRange: Dispatch<SetStateAction<Date>>;
  toRange?: Date;
  setToRange?: Dispatch<SetStateAction<Date>>;
  maxValue?: string;
  minValue?: string;
  isHolidaysVisible: boolean;
  isWeekendsVisible: boolean;
  startWeekday: WeekdaysItemType;
};

export type CalendarBodyWeeksType = Omit<CalendarBodyType, "type" | "setType">;

export type CalendarBodyMonthsType = {
  year: number;
  setType: Dispatch<SetStateAction<CalendarType>>;
  fromRange?: Date;
  setFromRange: Dispatch<SetStateAction<Date>>;
  toRange?: Date;
  setToRange?: Dispatch<SetStateAction<Date>>;
  maxValue?: string;
  minValue?: string;
};

export type CalendarCellType = {
  date: Date;
  setType?: Dispatch<SetStateAction<CalendarType>>;
  cellValue: number | string;
  outside: boolean;
  weekend?: boolean;
  holiday?: boolean;
  fromRange?: Date;
  setFromRange: Dispatch<SetStateAction<Date>>;
  toRange?: Date;
  setToRange?: Dispatch<SetStateAction<Date>>;
};
