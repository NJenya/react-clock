import {connect} from "react-redux";
import Time from './../views/Time';
import {updateTime} from "../../redux/timeReduser";
import React from "react";

class TimeContainer extends React.Component {



    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.props.updateTime()
    }

    render() {
        return <Time
            hour={this.props.hour}
            minute={this.props.minute}
            second={this.props.second} />
    }

}

let mapStateToProps = (state) => {
    return {
        hour: state.time.hour,
        minute: state.time.minute,
        second: state.time.second
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         setTime: (hour, minute, second) => {
//             dispatch(updateTimeAC(hour, minute, second))
//         }
//     }
// }

TimeContainer = connect(mapStateToProps, {updateTime})(TimeContainer)

export default TimeContainer;