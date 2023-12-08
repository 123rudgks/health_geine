'use client';
import CalendarBase from '@/components/Calendar/CalendarBase';
import { createCalendar } from '@internationalized/date';
import { useCalendar } from '@react-aria/calendar';
import { useLocale } from '@react-aria/i18n';
import { createDOMRef } from '@react-spectrum/utils';
import { useCalendarState } from '@react-stately/calendar';
import { DateValue, SpectrumCalendarProps } from '@react-types/calendar';
import { FocusableRef } from '@react-types/shared';
import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';

type Props = {};

const Calendar = forwardRef(
  <T extends DateValue>(
    props: SpectrumCalendarProps<T>,
    ref: FocusableRef<HTMLElement>
  ) => {
    let { visibleMonths = 1 } = props;
    visibleMonths = Math.max(visibleMonths, 1);
    let visibleDuration = useMemo(
      () => ({ months: visibleMonths }),
      [visibleMonths]
    );
    let { locale } = useLocale();
    // ? : 여기서 hook을 어떻게 사용하는지, hook 내부 코드는 어떻게 되어 있는지 궁금하다.
    let state = useCalendarState({
      ...props,
      locale,
      visibleDuration,
      createCalendar,
    });

    // ? : 얘네는 뭐지?
    let domRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => ({
      ...createDOMRef(domRef),
      focus() {
        state.setFocused(true);
      },
    }));
    // ? : ...

    // ? : aria-props, role은 왜 사용될까?
    // calendarProps : aria-props , id, role
    // prevButtonProps , nextButtonProps : prev,next 버튼에 필요한 method
    // errorMessageProps : ㅑㅇ
    let { calendarProps, prevButtonProps, nextButtonProps, errorMessageProps } =
      useCalendar(props, state);
    return (
      <CalendarBase
        {...props}
        visibleMonths={visibleMonths}
        state={state}
        calendarRef={domRef}
        calendarProps={calendarProps}
        prevButtonProps={prevButtonProps}
        nextButtonProps={nextButtonProps}
        errorMessageProps={errorMessageProps}
      />
    );
  }
);

Calendar.displayName = 'Calendar';
export default Calendar;
