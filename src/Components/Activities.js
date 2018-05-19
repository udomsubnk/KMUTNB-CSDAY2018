import React, {Component} from 'react';
import { Element } from 'react-scroll'
import '../Styles/Activities.css';

export default class TimeTable extends Component {
  state = {
    activities: [
      {
        time: "10:01 - 10:02",
        activity: "Start"
      }, {
        time: "10:02 - 10:03",
        activity: "Start Again"
      }, {
        time: "10:03 - 10:04",
        activity: "Start Again And Again"
      }, {
        time: "10:04 - 10:05",
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
      <Element className="mgt-global-20" name="scroll-time">
        <div className="Activities" data-aos="fade-up">
          <div className="title-section">
            <h1>ACTIVITIES</h1>
          </div>
          <div className="time-table">
            {activityItems}
          </div>
        </div>
      </Element>
    )
  }
}