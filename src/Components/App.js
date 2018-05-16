import React, { Component } from 'react';
import '../Styles/App.css';
import Landing from './Landing.js'
import Location from './Location.js'
import DateAndTime from './DateAndTime.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>เนื้อหาที่ต้องมี</h2>
        ref: <a href="http://2017.barcampbangkhen.org/"> barcamp </a>
        -Landing : logo,ลิงค์ลงทะเบียน,เลื่อนดูรายละเอียด
        -DateAndTime : schedule 
        -
        <Landing />
        <Location />
        <DateAndTime />
      </div>
    );
  }
}

export default App;
