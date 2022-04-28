import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


export const getZapros = graphql(gql`
query Categories {
  categories {
    name
    products {
      id
      name
      inStock
      gallery
      description
      category
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
      attributes {
        name
        id
        items {
          displayValue
          value
          id
        }
      }
    }
  }
}
`)