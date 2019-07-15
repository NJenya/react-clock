import {connect} from "react-redux";
import DateUI from '../views/DateUI';
import {updateDateAC} from "../../redux/dateReduser";
import React from "react";

class DateContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        let day = this.state.date.getDate();
        let month = this.state.date.getMonth() + 1;
        let year = this.state.date.getFullYear();
        this.props.updateDateAC(year, month, day)
    }

    render() {
        return  <DateUI year={this.props.year}
                        month={this.props.month}
                        day={this.props.day}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        year: state.date.year,
        month: state.date.month,
        day: state.date.day
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateDateAC: (year, month, day) => {
//             dispatch(updateDateAC(year, month, day))
//         }
//     }
// };

export default connect(mapStateToProps, {updateDateAC})(DateContainer);