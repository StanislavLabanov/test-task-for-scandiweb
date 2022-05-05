import React, { Fragment } from "react";
import img1 from "./image/Vector (6).png"
import img2 from "./image/Vector (5).png"
import PriseModal from "./PriseModal";

class Prise extends React.Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <Fragment>
            <div>{this.props.currency}</div>
            <div className="prise_button" data-action="true" >
               {
                  this.props.closeModal
                     ? <img src={img2} />
                     : <img src={img1} data-action="true" />
               }
            </div>
            {
               this.props.closeModal
                  ? <PriseModal attributes={this.props.attributes} />
                  : null
            }
         </Fragment >
      )
   }
}

export default Prise