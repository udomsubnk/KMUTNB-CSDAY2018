import React, { Component } from 'react';
import '../Styles/Footer.css';
import Table from './Table'

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <Table/>
        <a href="https://www.facebook.com/udomsub.nk" target="_blank" rel="noopener noreferrer">@udomsubnk</a>&nbsp;
        <a href="https://www.facebook.com/Basone01" target="_blank" rel="noopener noreferrer">@Basone01</a>&nbsp;
        <a href="https://www.facebook.com/kukiat.wangtaphan" target=" _blank" rel="noopener noreferrer">@kukiat5234</a>&nbsp;
        <a href="https://www.facebook.com/aiyhero" target="_blank" rel="noopener noreferrer">@blaster666</a>
      </div>
    );
  }
}

export default Footer;
