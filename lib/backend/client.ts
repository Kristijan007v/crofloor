import { ApolloClient, InMemoryCache } from "@apollo/client";

const WORDPRESS_URL = process.env.WORDPRESS_URL;

const client = new ApolloClient({
  uri: WORDPRESS_URL,
  cache: new InMemoryCache(),
});

export default client;
