import React, { Fragment } from "react";
import Card from "./Card";

class Tech extends React.Component {
   constructor(props) {
      super(props)

   }

   productsMap = () => {
      let mass = []
      if (this.props.attributes.categories) {
         this.props.attributes.categories.forEach(element => element.name === 'tech' ? mass = element.products : null);
      }
      return mass

   }

   render() {
      return (
         <Fragment>
            <h2 className="title_routes">Tech</h2>
            <div className="conteiner_cards">
               <Card productsmap={this.productsMap()} />
            </div>
         </Fragment>
      )
   }
}

export default Tech