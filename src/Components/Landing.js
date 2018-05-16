import React, { Component } from 'react';
import '../Styles/Landing.css';
import Logo from '../Utils/logo.png'
import { Button } from 'reactstrap';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <img src={Logo} alt="KMUTNB CSDAY 2018" height="400px"/>
        <h1>เตรียมพบกับ!! งานประกวดเทคโนโลยีสุดยิ่งใหญ่</h1>
        <h2>ของนักศึกษาภาควิชาคอมพิวเตอร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ</h2>
        <Button outline color="primary" size="lg">ลงทะเบียนเข้าร่วมงาน</Button>
        <Button outline color="secondary" size="lg">ดูเพิ่มเติม</Button>
      </div>
    );
  }
}

export default Landing;
