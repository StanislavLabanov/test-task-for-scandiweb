import React from "react";
import img from '../Header/image/Vector.png'
import { numberContext } from "../../context/numberContext";
import { NavLink } from "react-router-dom";


class Card extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         focus: ''
      }
   }

   basketButton = (id) => {
      this.props.productsmap.map(i => i.id === id && this.setState({ focus: `${i.id}` }))
   }

   render() {
      return (
         <numberContext.Consumer>
            {title => (
               this.props.productsmap.map(i =>
                  <div className="card" key={i.id} data-id="element" onMouseOver={() => this.basketButton(i.id)} onClick={() => title.idProduct(i.id)}>
                     {
                        i.inStock === true
                           ?
                           <NavLink to={'/productpage'} style={{ textDecoration: 'none' }} data-id="element">
                              <div className="image_block_card" data-id="element">
                                 <img src={i.gallery[0]} className="img_card" data-id="element" />
                              </div>
                              <div className="product_name" data-id="element">{i.name}</div>
                              <div className="product_prise" data-id="element">
                                 {i.prices.filter(k => k.currency.label === title.getCurrensy)[0].currency.symbol + i.prices.filter(k => k.currency.label === title.getCurrensy)[0].amount}
                              </div>
                           </NavLink>
                           :
                           <div className="background_card_overflow">
                              <div className="stock_text">OUT OF STOCK</div>
                              <div className="image_block_card" data-id="element">
                                 <img src={i.gallery[0]} className="img_card" data-id="element" />
                              </div>
                              <div className="product_name" data-id="element">{i.name}</div>
                              <div className="product_prise" data-id="element">
                                 {i.prices.filter(k => k.currency.label === title.getCurrensy)[0].currency.symbol + i.prices.filter(k => k.currency.label === title.getCurrensy)[0].amount}
                              </div>
                           </div>
                     }
                     {
                        this.state.focus === i.id && title.closeBasketButton === true && i.inStock === true
                           ?
                           <div className="add_cart_button" data-id="element"

                              onClick=
                              {() => {
                                 title.openModalProductAddBusketFunction(i)
                              }}

                           >
                              <img src={img} data-id="element" />
                           </div>
                           : null
                     }
                  </div>
               )
            )
            }
         </numberContext.Consumer>
      )
   }
}

export default Card