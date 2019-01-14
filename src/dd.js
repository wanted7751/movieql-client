import React from "react";
import { Query } from "react-apollo";
import { HOME_PAGE } from "./queries";

const Home = () => (
    <Query query={HOME_PAGE}>
        {({ loading, data, error }) => {
            if (loading) return "loading";
            if (error) return "something happened";
            if (data) {
                console.log("data");
                return <span>있다.</span>
            }
        }}
    </Query>
);

export default Home;