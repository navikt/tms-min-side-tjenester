import React from "react";
import { useQuery } from "react-query";
import { oppfolgingUrl } from "./api/urls";
import { fetcher } from "./api/api";
import { Ingress } from "@navikt/ds-react";
import { generelleLenker, oppfolgingsLenker } from "./lenker";
import Lenkeliste from "./components/Lenkeliste";
import "@navikt/ds-css";
import "./App.css";

function App() {
  const { data, isLoading } = useQuery(oppfolgingUrl, fetcher);
  const lenker = data?.erUnderOppfolging ? oppfolgingsLenker : generelleLenker;

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <Ingress className="flere-tjenester-header">Flere tjenester</Ingress>
      <Lenkeliste lenker={lenker} />
    </div>
  );
}

export default App;
