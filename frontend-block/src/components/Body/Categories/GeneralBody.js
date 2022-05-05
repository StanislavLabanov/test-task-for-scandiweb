import React, { Fragment } from "react";
import Card from "../Card";

class GeneralBody extends React.Component {
   constructor(props) {
      super(props)

   }

   render() {
      return (
         <Fragment>
            {
               <Fragment>
                  <h2 className="title_routes">{this.props.name.toUpperCase()}</h2>
                  <div className="conteiner_cards">
                     <Card productsmap={this.props.products} />
                  </div>
               </Fragment>
            }
         </Fragment>
      )
   }
}

export default GeneralBody