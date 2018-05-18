import React, {Component} from 'react';
import '../Styles/DateAndTime.css';

class DateAndTime extends Component {
  state = {
    activities: [
      {
        time: "10:00",
        activity: "Start"
      }, {
        time: "10:00",
        activity: "Start"
      }, {
        time: "10:00",
        activity: "Start"
      }, {
        time: "10:00",
        activity: "Start"
      }
    ]
  }
  render() {
    return (
      <div className="DateAndTime" data-aos="fade-up">
        <div className="title-section">
          <h1>DATE AND TIME</h1>
          <h2>28 June 2018</h2>
        </div>
        <div className="time-table">
          <div className="left-side">
            {this
              .state
              .activities
              .map(({activity, time}) => (
                <div class="time">{time}</div>
              ))}

          </div>
          <div className="right-side">
            {this
              .state
              .activities
              .map(({activity, time}) => (
                <div class="activity">{activity}</div>
              ))}
          </div>
        </div>

      </div>
    );
  }
}

export default DateAndTime;
