import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export const CategoriesNavMenuZaprose = graphql(gql`
query CategoriesNavMenu{
   categories{
      name
   }
}
`)