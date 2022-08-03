import React from "react";
import { QueryClientProvider } from "react-query";
import LanguageProvider from "./utils/LanguageProvider";
import App from "./App";
import queryClient from "./utils/query";

const Mikrofrontend = () => {
  return (
    <LanguageProvider defaultSprak="nb">
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </LanguageProvider>
  );
};

export default Mikrofrontend;
