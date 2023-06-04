import {gql} from '@apollo/client';

const GET_CLIENTS = gql`
    query getClients {
        clients{
            name
            id
            phone
            email
          }
    }
`

export { GET_CLIENTS };