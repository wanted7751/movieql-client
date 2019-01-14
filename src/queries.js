import gql from "graphql-tag"  


export const HOME_PAGE = gql`
    query{
        movies(limit:10, rating:8){
            id
            title
            genres
            rating
        }
    }`;