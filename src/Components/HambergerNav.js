import { slide as HambergerMenu } from 'react-burger-menu'
import { Link } from 'react-scroll'
import { NavMenu } from './NavMenu'

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
    marginTop: '40px',
    color: '#fff',
    fontWeight:'800',
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

  closeHamberger = () => {
    this.setState({ isOpen: false })
  }

  render() {
    return(
      <HambergerMenu width="250px" isOpen={this.state.isOpen} styles={styles}>
        <div className='hamberger'>
          <NavMenu name='landing'>
            <p onClick={this.closeHamberger}>landing</p>
          </NavMenu>
          <NavMenu name='date'>
            <p onClick={this.closeHamberger}>date</p>
          </NavMenu>
          <NavMenu name='detail'>
            <p onClick={this.closeHamberger}>detail</p>
          </NavMenu>
          <NavMenu name='location'>
            <p onClick={this.closeHamberger}>location</p>
          </NavMenu>
        </div>
      </HambergerMenu>
    )
  }
}