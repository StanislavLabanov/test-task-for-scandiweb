import React, { Fragment } from "react";
import { buttonProductPageContext } from "../../../context/buttonProductPageContext";

export default class ButtonProductPade extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         notAttributesProductText: ''
      }
   }

   render() {
      return (
         <buttonProductPageContext.Consumer>
            {title =>
               <Fragment>
                  <div className="button">
                     <div className="button_add_to_cart"

                        onClick={() => {
                           const lengthTrue = [...this.props.classNameState, ...this.props.massColorProduct]
                           if (lengthTrue.length === this.props.item.attributes.length) {
                              const massAttributeProduct = [{ Product: this.props.item, attributes: [...this.props.classNameState, ...this.props.massColorProduct] }]

                              if (localStorage.getItem('attributes')) {
                                 const mass = JSON.parse(localStorage.getItem('attributes'))
                                 mass.filter(el => JSON.stringify(el.attributes) == JSON.stringify(lengthTrue)).length
                                    ? localStorage.setItem('attributes', JSON.stringify([...mass]))
                                    : localStorage.setItem('attributes', JSON.stringify([...mass, ...massAttributeProduct]))

                              } else localStorage.setItem('attributes', JSON.stringify(massAttributeProduct))

                              this.setState({ notAttributesProductText: 'the product has been added to the cart' })
                              localStorage.getItem('numberProductsInBusket') ? localStorage.setItem('numberProductsInBusket', +localStorage.getItem('numberProductsInBusket') + 1) : localStorage.setItem('numberProductsInBusket', 1)
                              title.numberProductsInBusket(localStorage.getItem('numberProductsInBusket'))
                              localStorage.getItem(this.props.item.id + JSON.stringify(lengthTrue)) ? localStorage.setItem(this.props.item.id + JSON.stringify(lengthTrue), +localStorage.getItem(this.props.item.id + JSON.stringify(lengthTrue)) + 1) : localStorage.setItem(this.props.item.id + JSON.stringify(lengthTrue), 1)
                           } else {
                              this.setState({ notAttributesProductText: 'you have not selected the characteristics of the product' })
                           }
                        }}

                     >ADD TO CART
                     </div>
                  </div>
                  {this.state.notAttributesProductText && <div className="not_attributes_product" style={{ color: 'red' }}>{this.state.notAttributesProductText}</div>}
               </Fragment>
            }
         </buttonProductPageContext.Consumer>
      )
   }
}