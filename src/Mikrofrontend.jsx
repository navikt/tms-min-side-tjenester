import React from "react";
import { QueryClientProvider } from "react-query";
import App from "./App";
import queryClient from "./utils/query";

const Mikrofrontend = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

export default Mikrofrontend;
