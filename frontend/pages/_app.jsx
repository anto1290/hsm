import "../styles/globals.scss";
import "regenerator-runtime/runtime";
import "react-datepicker/dist/react-datepicker.css";
import App from "next/app";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  split,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  return {
    headers: {
      ...headers,
      fetchOptions: {
        credentials: "include",
      },
    },
  };
});
const httpLink = createUploadLink({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
  fetchOptions: {
    credentials: "include",
  },
});
const wsLink = process.browser
  ? new GraphQLWsLink(
    createClient({
      uri: "ws://localhost:4000/graphql",
      options: {
        reconnect: true,
      },
    })
  )
  : null;

const splitLink = process.browser
  ? split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    authLink.concat(httpLink)
  )
  : httpLink;
const client = new ApolloClient({
  ssrMode: true,
  link: splitLink,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
