import React, { Fragment } from "react";
import AttributProductPage from "./ProductPage/AttributeProductPage";
import { productClick } from "../../graphQl/ClickProduct";

class ModalAddBusketProduct extends React.Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <Fragment>
            {
               this.props.openModalProductAddBusket && this.props.data.product
                  ?
                  <div className="overflow" onClick={(event) => event.target.className === 'overflow' && this.props.closeModal('')}>
                     <div className="modal_attribute_product">
                        <div className="conteiner_modal">
                           <div className="name_product">{this.props.data.product.name}</div>
                           <div className="close" onClick={() => this.props.closeModal('')}>&#10006;</div>
                           <AttributProductPage item={this.props.data.product} />
                        </div>
                     </div>
                  </div>
                  : null
            }
         </Fragment>
      )
   }
}

export default productClick(ModalAddBusketProduct)