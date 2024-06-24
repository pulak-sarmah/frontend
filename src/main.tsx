import { ApolloProvider } from "@apollo/client";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { client } from "./apolloClient.ts";
import App from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
        <App />
      </ApolloProvider>
    </MantineProvider>
  </React.StrictMode>
);
