import React, {Component} from 'react';
import '../Styles/App.css';
import Landing from './Landing.js'
import Navbar from './Navbar.js'
import DateAndTime from './DateAndTime.js'
import Detail from './Detail.js'
import Location from './Location.js'
import Contact from './Contact.js'
import Footer from './Footer.js'
import AOS from 'aos';
import {Element} from 'react-scroll'
import StarfieldCanvas from './StarfieldCanvas';

class App extends Component {
  componentDidMount() {
    AOS.init({duration: 1000, easing: 'ease-in-out-quart'})
  }
  render() {
    return (

      <Element name="scroll-landing">
        <StarfieldCanvas/>
        <Navbar/>
        <div className="App">
          {/* <div className="white">
              <br /><br /><br /><br /><br />
              <h2>เนื้อหาที่ต้องมี</h2>
              <br />ref: <a href="http://2017.barcampbangkhen.org/"> barcamp </a>
              <br />-Landing : logo,ลิงค์ลงทะเบียน,เลื่อนดูรายละเอียด
              <br />-DateAndTime : schedule จัดที่ไหน เมื่อไหร่
              <br />-Detail : WHAT IS BARCAMP?, PARTICIPANTS, REASONS TO COME
              <br />-Location : map ชี้มามหาลัย, ตัวหนังสือบอกสถานที่,ที่จอดรถ
            </div> */}
          <Landing/>
          <Detail/>
          <DateAndTime/>
          <Location/>
          <Contact/>
          <Footer/>
        </div>
      </Element>
    );
  }
}

export default App;
