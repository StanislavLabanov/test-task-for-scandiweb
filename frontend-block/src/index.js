import React from 'react';
import ReactDOM from 'react-dom';

/*apollo graphql*/
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

/*styles*/
import './styles/index.scss';
import './styles/styleHeader.scss';
import './styles/styleProducts.scss';
import './styles/styleProductPage.scss';
import './styles/styleBasket.scss';
import './styles/styleModalAddBusketProduct.scss';
import './styles/styleModalBasket.scss';

import App from './App';

import reportWebVitals from './reportWebVitals';

const link = new HttpLink({
  uri: 'http://localhost:4000/'
})


const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
