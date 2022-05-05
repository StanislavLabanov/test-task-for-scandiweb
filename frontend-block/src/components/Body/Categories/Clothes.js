import React, { Fragment } from "react";
import { categoryInput } from "../../../graphQl/CategoryInput";
import GeneralBody from "./GeneralBody";

class Clothes extends React.Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <Fragment>
            {
               this.props.data.category
                  ? <GeneralBody name={this.props.data.category.name} products={this.props.data.category.products} />
                  :
                  <div className="title_main_page_block">
                     <h1>loading...</h1>
                  </div>

            }
         </Fragment>
      )
   }
}

export default categoryInput(Clothes)