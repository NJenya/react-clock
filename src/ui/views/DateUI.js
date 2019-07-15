import React from 'react';

const DateUI = (props) => {


	let {year, month, day} = props

	return (
		<div>
			{day}/{month}/{year}
		</div>
	)
}

export default DateUI