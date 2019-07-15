const UPDATE_DATE = 'CLOCK/CLOCK/UPDATE_DATE';

let initialState = {
    year: '--',
    month: '--',
    day: '--'
};

let dateReduser = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DATE: {
            return {
                ...state,
                year: action.year,
                month: action.month,
                day: action.day,
            }
        }
        default: return state
    }
};

export const updateDateAC = (year, month, day) => ({
    type: UPDATE_DATE,
    year,
    month,
    day
})

export default dateReduser;