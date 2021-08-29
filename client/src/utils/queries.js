import { gql } from '@apollo/client';

export const GET_ME = gql`
{
    me {
        _id
        username
        email
        savedBooks {
            authors
            image
            description 
            title 
            link
            bookId
        }
    }
}
`;