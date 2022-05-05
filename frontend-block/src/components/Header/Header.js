import React from "react";
import { NavLink } from "react-router-dom";
import Prise from "./Prise";
import BasketHeaderImg from "./BasketHeaderImg";
import { CategoriesNavMenuZaprose } from "../../graphQl/CategoriesNuvMenu";

import img from "./image/a-logo.png"

class Header extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         text: ''
      }
   }

   componentDidUpdate() {
      this.props.priseFunction()
   }
   render() {
      return (
         <div className="header">
            <div className="conteiner_header">
               <div className="header_nav_menu">
                  <ul>
                     {this.props.data.categories && this.props.data.categories.map(item => <li className={this.state.text === item.name ? 'menu_elements active' : 'menu_elements'} onClick={() => this.setState({ text: item.name })} key={item.name}><NavLink to={`/${item.name.toLowerCase()}`}>{item.name.toUpperCase()}</NavLink></li>)}
                  </ul>
               </div>
               <img src={img} />
               <div className="basket_and_prise_block">
                  <Prise currency={this.props.currency} closeModal={this.props.closeModal} />
                  <BasketHeaderImg priseFunction={this.props.priseFunction} removeProductsInBusket={this.props.removeProductsInBusket} numberProducts={this.props.numberProducts} numberProductsInBusket={this.props.numberProductsInBusket} currency={this.props.currency} basketProductsId={this.props.basketProductsId} />
               </div>
            </div>
         </div >
      )
   }
}

export default CategoriesNavMenuZaprose(Header)