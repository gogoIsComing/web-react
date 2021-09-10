import React from 'react';
import { nanoid } from 'nanoid';
import Button from '../Button/Button';
import logo from '../../assets/images/logo.svg';
import './Nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  }
  render() {
    const menuClasses = 'menu ' + (this.state.isMenuOpen ? 'active-menu' : '');

    let list = ['How We Work', 'Blog', 'Account'];
    list = list.map((item) => (
      <li key={nanoid()}>
        <a href="#">{item}</a>
      </li>
    ));

    return (
      <nav>
        <div className="flex-wrapper">
          <img src={logo} alt="Insure" className="logo" />
          <div className="open-menu-button" onClick={this.handleClick}></div>
        </div>
        <div className={menuClasses}>
          <div className="flex-wrapper">
            <img src={logo} alt="Insure" className="logo" />
            <div className="close-menu-button" onClick={this.handleClick}></div>
          </div>
          <ul>{list}</ul>
          <Button text="View Plans" />
        </div>
      </nav>
    );
  }
}

export default Nav;
