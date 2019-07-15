import React from 'react';

const Time = (props) => {

	let {hour, minute, second} = props

	return (
		<div>
			{hour}:{minute}:{second}
		</div>
	)
}

export default Time