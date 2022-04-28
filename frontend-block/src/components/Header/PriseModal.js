import React from "react";
import { currencyContext } from "../../context/currencyContext";
import { priseZaprose } from "../../graphQl/PriseQl";

class PriseModal extends React.Component {
   constructor(props) {
      super(props)
   }

   render() {
      return (
         <currencyContext.Consumer>
            {
               title => (
                  title.closeModal
                     ?
                     < div className="prise_modal">
                        <div className="conteiner_prise_modal" >
                           {
                              this.props.data.currencies &&
                              this.props.data.currencies.map((el, index) => (
                                 <div className="conversion" key={index} onClick={() => title.curn(el.label)}>{el.symbol}{el.label}</div>
                              ))
                           }
                        </div>
                     </div>

                     : null
               )
            }
         </currencyContext.Consumer>
      )
   }
}

export default priseZaprose(PriseModal)