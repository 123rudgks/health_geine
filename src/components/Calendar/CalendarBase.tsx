'use client';
import CalendarMonth from '@/components/Calendar/CalendarMonth';
import { useDateFormatter, useLocale } from '@react-aria/i18n';
import { CalendarState, RangeCalendarState } from '@react-stately/calendar';
import { AriaButtonProps } from '@react-types/button';
import { CalendarPropsBase } from '@react-types/calendar';
import { DOMProps, StyleProps } from '@react-types/shared';
import dayjs from 'dayjs';
import { HTMLAttributes, RefObject, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {};

interface CalendarBaseProps<T extends CalendarState | RangeCalendarState>
  extends CalendarPropsBase,
    DOMProps,
    StyleProps {
  state: T;
  visibleMonths?: number;
  calendarProps: HTMLAttributes<HTMLElement>;
  nextButtonProps: AriaButtonProps;
  prevButtonProps: AriaButtonProps;
  errorMessageProps: HTMLAttributes<HTMLElement>;
  calendarRef: RefObject<HTMLDivElement>;
}
function CalendarBase<T extends CalendarState | RangeCalendarState>(
  props: CalendarBaseProps<T>
) {
  let {
    state,
    calendarProps,
    nextButtonProps,
    prevButtonProps,
    errorMessageProps,
    calendarRef: ref,
    visibleMonths = 1,
  } = props;
  let { direction } = useLocale();
  let currentMonth = state.visibleRange.start;

  let monthDateFormatter = useDateFormatter({
    month: 'long',
    year: 'numeric',
    era:
      currentMonth.calendar.identifier === 'gregory' &&
      currentMonth.era === 'BC'
        ? 'short'
        : undefined,
    calendar: currentMonth.calendar.identifier,
    timeZone: state.timeZone,
  });

  const [mouseDown, setMouseDown] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);

  const [titlePosY, setTitlePosY] = useState<number>(-34);

  // let domRef = useFocusableRef(ref);
  // let {}=useButton(prevButtonProps)
  let titles = [];
  let calendars = [];
  // 달 한개
  for (let i = 0; i < visibleMonths; i++) {
    let d = currentMonth.add({ months: i });
    titles.push(
      <div key={i} className="mb-9 flex w-full justify-end">
        {/* <button
          onClick={() => {
            state.focusPreviousPage();
            state.selectFocusedDate();
          }}
        >
          prev
        </button> */}
        <div
          className="relative h-[34px] w-full overflow-hidden"
          onMouseDown={(e) => {
            setDragStartY(e.pageY);
            setMouseDown(true);
          }}
          onMouseMove={(e) => {
            if (!mouseDown) return;
            if (e.pageY - dragStartY > 0) {
              setTitlePosY((prev) => prev + 2);
            }
            if (e.pageY - dragStartY < 0) {
              setTitlePosY((prev) => prev - 2);
            }
          }}
          onMouseLeave={() => {
            setMouseDown(false);
            setTitlePosY((prev) => {
              if (prev / 34 > Math.round(prev / 34)) {
                state.focusNextPage();
              }
              if (prev / 34 < Math.round(prev / 34)) {
                state.focusPreviousPage();
              }
              return Math.round(prev / 34) * 34;
            });
          }}
          onMouseUp={() => {
            setMouseDown(false);
            setTitlePosY((prev) => {
              return Math.round(prev / 34) * 34;
            });
          }}
        >
          <div
            className={twMerge(
              'absolute right-0  flex flex-col  font-noto text-[25px] font-bold text-white'
            )}
            style={{ top: `${titlePosY}px` }}
          >
            <div className="h-[34px] select-none opacity-70">
              {d.subtract({ months: 1 }).toString()}
            </div>
            <div className="h-[34px] select-none">{d.toString()}</div>
            <div className="h-[34px] select-none opacity-70">
              {d.add({ months: 1 }).toString()}
            </div>
          </div>
        </div>

        {/* <button
          onClick={() => {
            state.focusNextPage();
            state.selectFocusedDate();
          }}
        >
          next
        </button> */}
      </div>
    );
    calendars.push(
      <CalendarMonth {...props} key={i} state={state} startDate={d} />
    );
  }
  return (
    <div>
      <div className="mb-9 flex w-full justify-end">
        {/* <button
          onClick={() => {
            state.focusPreviousPage();
            state.selectFocusedDate();
          }}
        >
          prev
        </button> */}
        <div
          className="relative h-[34px] w-full overflow-hidden"
          onMouseDown={(e) => {
            setDragStartY(e.pageY);
            setMouseDown(true);
          }}
          onMouseMove={(e) => {
            if (!mouseDown) return;
            if (e.pageY - dragStartY > 0) {
              setTitlePosY((prev) => prev + 2);
            }
            if (e.pageY - dragStartY < 0) {
              setTitlePosY((prev) => prev - 2);
            }
          }}
          onMouseLeave={() => {
            setMouseDown(false);
            if (titlePosY / 34 > Math.round(titlePosY / 34)) {
              state.focusNextPage();
              setTitlePosY(-34);
            }
            if (titlePosY / 34 < Math.round(titlePosY / 34)) {
              state.focusPreviousPage();
              setTitlePosY(-34);
            }
          }}
          onMouseUp={() => {
            setMouseDown(false);
            if (titlePosY / 34 > Math.round(titlePosY / 34)) {
              state.focusNextPage();
              setTitlePosY(-34);
            }
            if (titlePosY / 34 < Math.round(titlePosY / 34)) {
              state.focusPreviousPage();
              setTitlePosY(-34);
            }
          }}
        >
          <div
            className={twMerge(
              'absolute right-0  flex flex-col  font-noto text-[25px] font-bold text-white'
            )}
            style={{ top: `${titlePosY}px` }}
          >
            <div className="h-[34px] select-none opacity-70">
              {dayjs(currentMonth.subtract({ months: 1 }).toString()).format(
                'YYYY M월'
              )}
            </div>
            <div className="h-[34px] select-none">
              {dayjs(currentMonth.toString()).format('YYYY M월')}
            </div>
            <div className="h-[34px] select-none opacity-70">
              {dayjs(currentMonth.add({ months: 1 }).toString()).format(
                'YYYY M월'
              )}
            </div>
          </div>
        </div>

        {/* <button
          onClick={() => {
            state.focusNextPage();
            state.selectFocusedDate();
          }}
        >
          next
        </button> */}
      </div>
      {calendars}
    </div>
  );
}
{
}

export default CalendarBase;
