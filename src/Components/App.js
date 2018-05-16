import React, { Component } from 'react';
import '../Styles/App.css';
import Landing from './Landing.js'
import Location from './Location.js'
import DateAndTime from './DateAndTime.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="white">
          <h2>เนื้อหาที่ต้องมี</h2>
          <br />ref: <a href="http://2017.barcampbangkhen.org/"> barcamp </a>
          <br />-Landing : logo,ลิงค์ลงทะเบียน,เลื่อนดูรายละเอียด
          <br />-DateAndTime : schedule จัดที่ไหน เมื่อไหร่
          <br />-Location : map ชี้มามหาลัย, ตัวหนังสือบอกสถานที่,ที่จอดรถ
        </div>
        <Landing />
        <Location />
        <DateAndTime />
      </div>
    );
  }
}

export default App;
