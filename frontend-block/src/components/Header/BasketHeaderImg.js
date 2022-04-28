import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import img from "./image/Empty Cart.png"
import BasketProducts from "../Body/Basket/BasketProducts"

class BasketHeaderImg extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         modalCloseAndOpen: false,
         flag: 'modal'
      }
   }

   componentDidUpdate() {
      this.props.priseFunction()
   }

   render() {
      return (
         <Fragment>
            <img src={img} style={{ cursor: 'pointer' }} onClick={() => this.setState({ modalCloseAndOpen: !this.state.modalCloseAndOpen })} />
            {localStorage.getItem('numberProductsInBusket') &&
               <div className="number_products_in_basket">
                  {+localStorage.getItem('numberProductsInBusket')}
               </div>
            }
            {
               this.state.modalCloseAndOpen
                  ?
                  <div className="overflow" onClick={(event) => event.target.className === 'overflow' && this.setState({ modalCloseAndOpen: false })}>
                     <div className="modal_basket">
                        <div className="conteiner_modal_busket">
                           <div className="title"><span>My Bag:</span> {localStorage.getItem('numberProductsInBusket') ? localStorage.getItem('numberProductsInBusket') : 0} items</div>
                           <div className="mini_attributes">
                              <BasketProducts flag={this.state.flag} priseFunction={this.props.priseFunction} removeProductsInBusket={this.props.removeProductsInBusket} numberProductsInBusket={this.props.numberProductsInBusket} currency={this.props.currency} data={this.props.data} basketProductsId={this.props.basketProductsId} />
                           </div>
                           <div className="total_modal">
                              <div className="total">Total</div>
                              <div className="prise">{localStorage.getItem('prise')}</div>
                           </div>
                           <div className="buttons_modal">
                              <NavLink to={'/basket '}><div className="button_view_bag" onClick={() => this.setState({ modalCloseAndOpen: false })}>VIEW BAG</div></NavLink>
                              <div className="button_check_out">CHECK OUT</div>
                           </div>
                        </div>
                     </div>
                  </div>
                  : null
            }
         </Fragment>
      )
   }
}

export default BasketHeaderImg