import React, { useState } from "react";

import { withCalendarLogic } from "@/hocs/with-calendar-logic";
import { withInputLogic } from "@/hocs/with-input-logic";
import { GlobalStyles } from "@/styles/globalStyles";
import { createDateFromString } from "@/utils/dateUtils";
import { splitDate } from "@/utils/inputUtils";

import { Calendar } from "../calendar/calendar";
import { Wrapper } from "./styles";

interface DatePickerProps {
  value: string;
  maxValue: string;
  minValue: string;
  startFromMonday: boolean;
}

// TODO: Возможность выбора максимальной даты календаря;
// TODO: Возможность выбора минимальной даты для календаря;
// TODO: Возможность скрывать/показывать выходные дни и выделять праздничные дни другим цветом;
// TODO: Выбор вида календаря (по неделям, месяцам и т.д.);

export function DatePicker({
  value,
  maxValue,
  minValue,
  startFromMonday,
}: DatePickerProps) {
  const [date, setDate] = useState(createDateFromString(value) || new Date());
  const { day, month, year } = splitDate(date);

  const CalendarWithLogic = withCalendarLogic(
    Calendar,
    maxValue,
    minValue,
    startFromMonday,
    setDate,
    year,
    month,
    day
  );
  const CalendarWithInput = withInputLogic(
    CalendarWithLogic,
    maxValue,
    minValue,
    date,
    setDate
  );

  return (
    <Wrapper>
      <GlobalStyles />
      <CalendarWithInput />
    </Wrapper>
  );
}
