import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


export const getZapros = graphql(gql`
   query ClickProduct($input: CategoryInput){
      category(input: $input){
         name
         products {
            id
            name
            prices {
              currency {
                label
                symbol
              }
              amount
            }
         }
      }
   }
`, {
  options: {
    variables: {
      "input": {
        title: "all"
      }
    }
  }
},
)