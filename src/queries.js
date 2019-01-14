import gql from "graphql-tag"  


export const HOME_PAGE = gql`
    query{
        movies(limit:3, rating:8){
            id
            title
            genres
        }
    }`;