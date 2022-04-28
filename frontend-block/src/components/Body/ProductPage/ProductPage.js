import React, { Fragment } from "react";
import AttributProductPage from "./AttributeProductPage";
import ButtonProductPade from "./ButtonProductPage";

class ProductPage extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         flag: ''
      }
   }

   productsMap = () => {
      const mass = []
      if (this.props.data) this.props.data.filter(element => element.name === 'all')[0].products.forEach(el => el.id === this.props.idProduct && mass.push(el))
      return mass
   }

   render() {
      return (
         <Fragment>
            {
               this.productsMap().map(item =>
                  <div className="flex_product_block" key={item.id}>
                     <div className="product_pictures">
                        {
                           item.gallery.map(img =>
                              <img key={img} src={img} onClick={() => this.setState({ flag: img })} />
                           )
                        }
                        {
                        }
                     </div>
                     <img src={item.gallery[0]} className="main_img_product" />
                     <div className="description_product">
                        <div className="name_product">{item.name}</div>
                        <div className="brand">{item.brand}</div>
                        <div className="prise_title">Prise:</div>
                        <div className="prise">

                           {item.prices.filter(k => k.currency.label === this.props.currency)[0].currency.symbol + item.prices.filter(k => k.currency.label === this.props.currency)[0].amount}

                        </div>
                        <AttributProductPage item={item} prise={item.prices.filter(k => k.currency.label === this.props.currency)[0].amount} />
                        <div className="text_description" dangerouslySetInnerHTML={{ __html: `${item.description}` }}></div>
                     </div>
                  </div>
               )
            }
            {
               this.state.flag.length
                  ?
                  (<div className="overflow" onClick={(event) => event.target.className === "overflow" && this.setState({ flag: '' })}>
                     <div className="img_and_close_block">
                        <img src={this.state.flag} />
                        <div className="close" onClick={() => this.setState({ flag: '' })}>&#10006;</div>
                     </div>
                  </div>)
                  : null
            }
         </Fragment>
      )
   }
}

export default ProductPage