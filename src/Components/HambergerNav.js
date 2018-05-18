import { slide as HambergerMenu } from 'react-burger-menu'
import React from 'react'

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '25px',
    height: '25px',
    left: '36px',
    top: '13px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
export default class HambergerNav extends React.Component {
  state = {
    isOpen: false
  }
  render() {
    return(
      <HambergerMenu width="250px" isOpen={this.state.isOpen} styles={styles}>
        <a>xxxxx</a>
        <a>xxxxx</a>
        <a>xxxxx</a>
        <a>xxxxx</a>
      </HambergerMenu>
    )
  }
}