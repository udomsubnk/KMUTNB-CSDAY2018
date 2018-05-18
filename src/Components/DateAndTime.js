import React, {Component} from 'react';
import '../Styles/DateAndTime.css';

export default class DateAndTime extends Component {
  state = {
    activities: [
      {
        time: "10:01",
        activity: "Start"
      }, {
        time: "10:02",
        activity: "Start Again"
      }, {
        time: "10:03",
        activity: "Start Again And Again"
      }, {
        time: "10:04",
        activity: "Start Again And Again And Again"
      }
    ]
  }
  render() {
    const {activities} = this.state;
    const activityItems = activities.map(({activity, time}) => (
      <div className="time-table-item" key={time}>
        <div className="time">
          <h4 data-aos="fade-right" style={{
            margin: 0
          }}>{time}</h4>
        </div>
        <div className="activity">
          <h5 data-aos="fade-left" style={{
            margin: 0
          }}>{activity}</h5>
        </div>
      </div>
    ))

    return (
      <div className="DateAndTime" data-aos="fade-up">
        <div className="title-section">
          <h1>DATE AND TIME</h1>
          <h2>28 June 2018</h2>
        </div>
        <div className="time-table">
          {activityItems}
        </div>
      </div>
    )
  }
}