import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export const priseZaprose = graphql(gql`
query Prise{
   currencies {
      label
      symbol
    }
}
`)