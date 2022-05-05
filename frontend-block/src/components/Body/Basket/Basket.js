import React, { Fragment } from "react";
import BasketProducts from "./BasketProducts";

class Basket extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         flag: 'basket'
      }
   }

   componentDidUpdate() {
      this.props.priseFunction()
   }

   render() {
      return (
         <div className="basket_page">
            <h2 className="title_routes">CART</h2>
            <BasketProducts flag={this.state.flag} priseFunction={this.props.priseFunction} removeProductsInBusket={this.props.removeProductsInBusket} numberProductsInBusket={this.props.numberProductsInBusket} currency={this.props.currency} />
            <div className="discription_basket">
               {
                  +localStorage.getItem('numberProductsInBusket') !== 0
                     ?
                     <Fragment>
                        <div className="tax">Tax: <span>$15.00</span></div>
                        <div className="number">Qty: <span>{localStorage.getItem('numberProductsInBusket')}</span></div>
                        <div className="total">Total: <span>{localStorage.getItem('prise')}</span></div>
                        <div className="order_button">ORDER</div>
                     </Fragment>
                     : null
               }
            </div>
         </div>
      )
   }
}

export default Basket