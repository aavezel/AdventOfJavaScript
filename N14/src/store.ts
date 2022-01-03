import { derived, readable, writable } from 'svelte/store';

const monthLang = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const date = new Date();

export const currentDate = readable(
    { date: date.getDate(), month: date.getMonth(), year: date.getFullYear() },
    (set) => {
        const interval = setInterval(() => {
            const date = new Date();
            set({
                date: date.getDate(),
                month: date.getMonth(),
                year: date.getFullYear()
            });
        }, 1000);

        return function stop() {
            clearInterval(interval);
        };
    }
);

function MonthYearStore() {
    const { subscribe, update } = writable({ month: date.getMonth(), year: date.getFullYear() });
    return {
        subscribe,
        nextMonth: () => update(({ month: prevMonth, year: prevYear }) => {
            let month = prevMonth + 1;
            let year = prevYear;
            if (month > 11) {
                month = 0;
                year += 1;
            }
            return { month, year };
        }),
        prevMonth: () => update(({ month: prevMonth, year: prevYear }) => {
            let month = prevMonth - 1;
            let year = prevYear;
            if (month < 0) {
                month = 11;
                year -= 1;
            }
            return { month, year };
        }),
    }
}

export const currentSelectedDate = MonthYearStore();

export const calendar = derived([currentSelectedDate, currentDate], ([$currentSelectedDate, $currentDate]) => {
    const { month, year } = $currentSelectedDate;
    const { month: currentMonth, year: currentYear, date: currentDate } = $currentDate;
    const date = new Date(year, month);
    const skipDates = Array(date.getDay()).fill({}).map((_, idx) => ({ text: '', isToday: false, id: `${month}_skip_${idx}` }));

    const currentMonthSelected = month === currentMonth && year === currentYear;
    const datesInMonth = new Date(year, month + 1, 0).getDate();
    const realDates = Array(datesInMonth).fill({}).map((_, i) => ({
        text: (i + 1),
        isToday: currentMonthSelected && currentDate === i + 1,
        id: `${month}_${i+1}`
    }));

    const addDates = Array(42 - date.getDay() - datesInMonth).fill({text: '', isToday: false}).map((e, idx) => ({...e, id: `${month}_add_${idx}`}));

    const dates = [...skipDates, ...realDates, ...addDates];

    return {
        yearStr: year.toString(),
        monthStr: monthLang[month],
        dates
    }
})