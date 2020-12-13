import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import {FaCartArrowDown} from 'react-icons/fa'


export default class Navbar extends Component {

state={
  navState:false,
  navClass:"collapse navbar-collapse",
  // menus array of object for dynamic show
  menus:[{id:1,text:"Home",url:'/'},
  {id:2,text:"About",url:'/about'},
  {id:3,text:"Services",url:'/services'},
  {id:4,text:"Contact",url:'/contact'}]
}
// function for toggleing the hamburgur
toggleFunction=()=>{
  this.state.navState ? this.setState({
    navState:false,
    navClass:"collapse navbar-collapse show"
  }) : this.setState({
    navState:true,
    navClass:"collapse navbar-collapse"
  })
}

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark text-white ">
        <Link to="/" className="navbar-brand ml-5">
          <img src={logo} alt="logo" width="40px" />
          <h1 className="navbar-brand text-white ml-2">Ecom Express</h1>
        </Link>
        <button className="navbar-toggler" onClick={this.toggleFunction}>
          <span className="text-white"> <i className="fas fa-bars"></i></span>
        </button>
        <div className={this.state.navClass}>
          <ul className="navbar-nav ml-auto mr-5">
            {/* // dynamically called menu from  array */}
            {this.state.menus.map(menu=>{
              return(
                // dynamic rendering of menus
                <li key={menu.id} className="nav-item">
                <Link to={menu.url} className="nav-link text-white">
                  {menu.text}
                </Link>
              </li>
              )
            })}
            {/* cart icon link */}
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                <FaCartArrowDown className="cart-icon"/>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
