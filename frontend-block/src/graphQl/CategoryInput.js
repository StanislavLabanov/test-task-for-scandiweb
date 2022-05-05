import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


export const categoryInput = graphql(gql`
   query ClickProduct($input: CategoryInput){
      category(input: $input){
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
`, {
   options: (props) => ({
      variables: {
         "input": {
            title: props.name
         }
      }
   })
},
)