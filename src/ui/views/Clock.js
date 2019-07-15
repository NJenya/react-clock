import React from 'react';
import styles from './clock.module.css'
import TimeContainer from "../containers/TimeContainer";
import DateContainer from "../containers/DateContainer";

class Clock extends React.Component {

	state = {
		toggleDate: true
	}

	onToggleClick = () => {
		this.setState({ toggleDate: !this.state.toggleDate })
	}

	render() {
		return (
			<div>
				<div className={styles.toggleButton}>
					<button onClick={this.onToggleClick}>Toggle Date</button>
				</div>
				<div className={styles.clock}>
					<TimeContainer />
					{this.state.toggleDate && <DateContainer />}
				</div>
			</div>
		)
	}
}

export default Clock