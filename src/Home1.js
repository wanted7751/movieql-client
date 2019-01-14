import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";
//
const Home = () => 
  <Query query={HOME_PAGE}>
        {
            ({ loading, data, error} ) => {
        if (loading) return <span>loading</span>;
        if (error) return <span>error</span>;
        if (data) {
            return data.movies.map((movie) => 
            <h2 key={movie.id}>{movie.title} / {movie.rating}</h2>)
      }
    }}
  </Query>
// 첫번째 괄호는 jsx문법
// 2번째 문법은 쿼리 결과값
// 3분째 괄호는 비구조화 할당
export default Home;