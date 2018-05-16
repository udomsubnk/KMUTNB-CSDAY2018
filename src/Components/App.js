import React, { Component } from 'react';
import '../Styles/App.css';
import Navbar from './Navbar.js'
import Landing from './Landing.js'
import DateAndTime from './DateAndTime.js'
import Detail from './Detail.js'
import Location from './Location.js'
import Footer from './Footer.js'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="App">
          <div className="white">
            <h2>เนื้อหาที่ต้องมี</h2>
            <br />ref: <a href="http://2017.barcampbangkhen.org/"> barcamp </a>
            <br />-Landing : logo,ลิงค์ลงทะเบียน,เลื่อนดูรายละเอียด
            <br />-DateAndTime : schedule จัดที่ไหน เมื่อไหร่
            <br />-Detail : WHAT IS BARCAMP?, PARTICIPANTS, REASONS TO COME      
            <br />-Location : map ชี้มามหาลัย, ตัวหนังสือบอกสถานที่,ที่จอดรถ
          </div>
          <Landing />
          <DateAndTime />
          <Detail />
          <Location />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
