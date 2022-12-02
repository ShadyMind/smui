import { useReducer } from 'react';

const ACTIONS = {
    INIT_CALENDAR: 'INIT_CALENDAR',
};

function * monthDates() {
    const date = new Date();
    const firstWeekDay = date.getDay();
    const currentMonth = date.getMonth();
    const nextMonth = currentMonth + 1;
    date.setDate(-(date.getDay()) + 1);

    while (date.getMonth() !== nextMonth && date.getDate() <= 31) {
        date.setDate(date.getDate() + 1);

        yield date;
    }
}

function dateProcessorReducer(state, action) {
    if (action.type === ACTIONS.INIT_CALENDAR) {
        return { state, dates: createDates() };
    }

    return state;
}
export function useDateProcessor = (date) => {
    const [state, dispatch] = useReducer(dateProcessorReducer, {});


};