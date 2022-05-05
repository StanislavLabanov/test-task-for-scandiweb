import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*components*/
import Header from "./components/Header/Header";
import Clothes from "./components/Body/Categories/Clothes";
import Tech from "./components/Body/Categories/Tech";
import All from "./components/Body/Categories/All";
import Basket from "./components/Body/Basket/Basket";
import ProductPage from "./components/Body/ProductPage/ProductPage";
import MainPage from "./components/Body/Main";
import ModalAddBusketProduct from "./components/Body/ModalAddBusketProduct";

import { getZapros } from "./graphQl/MainQl";

/*context*/
import { numberContext } from "./context/numberContext";
import { buttonProductPageContext } from "./context/buttonProductPageContext";
import { currencyContext } from "./context/currencyContext";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numberProducts: 0,
      currency: 'USD',
      closeModal: false,
      closeBasketButton: false,
      openModalProductAddBusket: '',
      idProduct: '',

    }
  }

  priseFunction = () => {
    let prise = 0
    let symbol = ''

    this.props.data.category &&
      this.props.data.category.products.forEach(element => {
        JSON.parse(localStorage.getItem('attributes')) && JSON.parse(localStorage.getItem('attributes')).forEach(id => element.id === id.Product.id && element.prices.forEach(pr => {
          if (pr.currency.label === this.state.currency) {
            prise += +localStorage.getItem(element.id + JSON.stringify(id.attributes)) * +pr.amount
            symbol = pr.currency.symbol
          }
        })
        )
      })

    localStorage.setItem('prise', symbol + prise.toFixed(2))
  }

  openModalProductAddBusketFunction = (element) => this.setState({ openModalProductAddBusket: element })

  numberProductsInBusket = (number) => this.setState({ numberProducts: number })

  idProduct = (id) => this.setState({ idProduct: id })

  currency = (curn) => this.setState({ currency: curn })

  removeProductsInBusket = (el, number, attr) => {
    +localStorage.getItem('numberProductsInBusket') === 0 && localStorage.removeItem('numberProductsInBusket')
    if (!(+number - 1)) {
      localStorage.removeItem(el)
      const newAttributes = JSON.parse(localStorage.getItem('attributes')).filter(item => JSON.stringify(item.attributes) !== attr)
      localStorage.setItem('attributes', JSON.stringify(newAttributes))
    }
  }

  componentDidMount() {
    !localStorage.getItem('attributes') && localStorage.setItem('attributes', JSON.stringify([]))
  }

  render() {
    return (
      <buttonProductPageContext.Provider value={{ numberProductsInBusket: this.numberProductsInBusket, totalPrise: this.totalPrise }}>
        <currencyContext.Provider value={{ curn: this.currency, closeModal: this.state.closeModal }}>
          <numberContext.Provider value={{ closeBasketButton: this.state.closeBasketButton, idProduct: this.idProduct, getCurrensy: this.state.currency, openModalProductAddBusketFunction: this.openModalProductAddBusketFunction }}>
            <BrowserRouter>
              <div className="wrapper" onMouseOver={(event) => event.target.dataset.id === 'element' ? this.setState({ closeBasketButton: true }) : this.setState({ closeBasketButton: false })} onClick={(event) => event.target.dataset.action === "true" ? this.setState({ closeModal: true }) : this.setState({ closeModal: false })}>
                <Header priseFunction={this.priseFunction} removeProductsInBusket={this.removeProductsInBusket} numberProductsInBusket={this.numberProductsInBusket} currency={this.state.currency} numberProducts={this.state.numberProducts} closeModal={this.state.closeModal} />
                <div className="conteiner">
                  <ModalAddBusketProduct openModalProductAddBusket={this.state.openModalProductAddBusket} closeModal={this.openModalProductAddBusketFunction} />
                  <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/clothes'} element={<Clothes name={"clothes"} />} />
                    <Route path={'/tech'} element={< Tech name={"tech"} />} />
                    <Route path={'/all'} element={<All name={"all"} />} />
                    <Route path={'/basket'} element={<Basket priseFunction={this.priseFunction} removeProductsInBusket={this.removeProductsInBusket} numberProductsInBusket={this.numberProductsInBusket} currency={this.state.currency} />} />
                    <Route path={'/productpage'} element={<ProductPage currency={this.state.currency} idProduct={this.state.idProduct} />} />
                  </Routes>
                </div>
              </div>
            </BrowserRouter >
          </numberContext.Provider>
        </currencyContext.Provider >
      </buttonProductPageContext.Provider>
    )
  }
}

export default getZapros(App)