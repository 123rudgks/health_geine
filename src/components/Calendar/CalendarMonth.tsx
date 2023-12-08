import {
  CalendarDate,
  endOfMonth,
  getWeeksInMonth,
} from '@internationalized/date';
import { useCalendarGrid } from '@react-aria/calendar';
import { useLocale } from '@react-aria/i18n';
import { CalendarState, RangeCalendarState } from '@react-stately/calendar';
import { CalendarPropsBase } from '@react-types/calendar';
import { DOMProps, StyleProps } from '@react-types/shared';
import { twMerge } from 'tailwind-merge';

interface CalendarMonthProps extends CalendarPropsBase, DOMProps, StyleProps {
  state: CalendarState | RangeCalendarState;
  startDate: CalendarDate;
}

const DAYS_KR = ['일', '월', '화', '수', '목', '금', '토'];

const CalendarMonth = (props: CalendarMonthProps) => {
  let { state, startDate } = props;
  let { gridProps, headerProps, weekDays } = useCalendarGrid(
    {
      ...props,
      endDate: endOfMonth(startDate),
    },
    state
  );

  let { locale } = useLocale();
  let weeksInMonth = getWeeksInMonth(startDate, locale);
  console.log(weeksInMonth);
  // 해당하는 달의 각 주 내의 날짜들
  console.log(
    [...Array.from({ length: weeksInMonth }, (_, i) => i)].map((weekIndex) =>
      state
        .getDatesInWeek(weekIndex, startDate)
        .map((date, i) => date?.toString())
    )
  );
  return (
    <table {...gridProps} className="aspect-[1.2/1] w-full">
      <thead {...headerProps}>
        <tr>
          {DAYS_KR.map((day, index) => (
            <th key={index}>
              <span className="h-7 w-7 font-noto text-white">{day}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array.from({ length: weeksInMonth }, (_, i) => i)].map(
          (weekIndex) => (
            <tr key={weekIndex}>
              {state.getDatesInWeek(weekIndex, startDate).map((date, i) => (
                <td
                  key={i}
                  onClick={() => {
                    date && state.selectDate(date);
                  }}
                  className="text-center"
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <div
                      className={twMerge(
                        'h-7 w-7 rounded font-noto',
                        date?.month !== startDate.month ? 'opacity-70' : '',
                        date && state.isSelected(date)
                          ? 'bg-white text-primary-400 opacity-100'
                          : 'text-white'
                      )}
                    >
                      {date?.day}
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default CalendarMonth;
