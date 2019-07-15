const UPDATE_TIME = 'CLOCK/CLOCK/UPDATE_TIME';

let initialState = {
	hour: '--',
	minute: '--',
	second: '--'
};

let timeReduser = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_TIME: {
			return {
				...state,
				hour: action.hour,
				minute: action.minute,
				second: action.second
			}
		}
		default:
			return state
	}
};
const setTime = (hour, minute, second) => ({type: UPDATE_TIME, hour, minute, second})

export const updateTime = () => (dispatch) => {
	setInterval(() => {
		console.log('qq')
		let date = new Date();
		let hour = date.getHours();
		let minute = date.getMinutes();
		let second = date.getSeconds();
		dispatch(setTime(hour, minute, second));
	}, 1000)
};


export default timeReduser;