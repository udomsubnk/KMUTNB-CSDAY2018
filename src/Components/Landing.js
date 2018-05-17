import React, { Component } from 'react';
import '../Styles/Landing.css';
import Logo from '../Utils/logo.png'
import { Button } from 'reactstrap';
import Carousel from './Carousel.js'

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <img src={Logo} alt="KMUTNB CSDAY 2018" width="230px" className="Landing-logo"/>
        <h1>KMUTNB CSDAY 2018</h1>
        <h1 className="Landing-preparetext">เตรียมพบกับ!! งานประกวดเทคโนโลยีสุดยิ่งใหญ่</h1>
        <h2 className="inline">ของ<span className="Landing-csstudent">นักศึกษาภาควิชาคอมพิวเตอร์</span></h2>
        <h2 className="inline">&nbsp;มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</h2>
        <Carousel />
        <div className="Landing-calltoaction">
          <Button outline color="primary" size="lg" className="Landing-register" href="https://docs.google.com/forms/d/e/1FAIpQLSd1MoDN5sd6t0pDZRE85aePMoUm4aTjKObXAUP6EohqAqsKKw/viewform" target="_blank">
            ลงทะเบียนเข้าร่วมงาน
          </Button>
          <br />
          <span className="Landing-register-text">สำหรับหน่วยงานหรือบริษัทที่สนใจเข้าเยี่ยมชม</span>
        </div>
      </div>
    );
  }
}

export default Landing;
