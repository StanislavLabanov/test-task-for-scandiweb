import React, { Fragment } from "react";
import AttributProductPage from "./ProductPage/AttributeProductPage";

export default class ModalAddBusketProduct extends React.Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <Fragment>
            {
               this.props.openModalProductAddBusket
                  ?
                  <div className="overflow" onClick={(event) => event.target.className === 'overflow' && this.props.closeModal(null)}>
                     <div className="modal_attribute_product">
                        <div className="conteiner_modal">
                           <div className="name_product">{this.props.openModalProductAddBusket.name}</div>
                           <div className="close" onClick={() => this.props.closeModal(null)}>&#10006;</div>
                           <AttributProductPage item={this.props.openModalProductAddBusket} />
                        </div>
                     </div>
                  </div>
                  : null
            }
         </Fragment>
      )
   }
}