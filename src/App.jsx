import React from "react";
import { useQuery } from "react-query";
import { oppfolgingUrl } from "./api/urls";
import { fetcher } from "./api/api";
import { Ingress, Panel } from "@navikt/ds-react";
import { generelleLenker, oppfolgingsLenker } from "./lenker";
import Lenkeliste from "./components/Lenkeliste";
import Utbetaling from "./components/utbetaling/Utbetaling";
import KommunikasjonsFlis from "./components/kommunikasjonsflis/KommunikasjonsFlis";
import SisteSakerPanel from "./components/siste-saker-panel/SisteSakerPanel";
import GenerelleFliser from "./components/generelle-fliser/GenerelleFliser";
import "@navikt/ds-css";
import "./App.css";

function App() {
  const { data, isLoading } = useQuery(oppfolgingUrl, fetcher);
  const brukerUnderOppfolging = data?.erBrukerUnderOppfolging;
  const lenker = brukerUnderOppfolging ? oppfolgingsLenker : generelleLenker;

  if (isLoading) {
    return null;
  }

  return (
    <>
      <section>
        <section className="min-side-lenkepanel">
          <section className={brukerUnderOppfolging ? "lenkepanel-stor-wrapper" : "lenkepanel-liten-wrapper"}>
            <Utbetaling />
            <KommunikasjonsFlis size={brukerUnderOppfolging ? "large" : "small"} />
          </section>
          <SisteSakerPanel />
        </section>
        {brukerUnderOppfolging ? null : <GenerelleFliser />}
      </section>
      <div className="flere-tjenester">
        <Panel>
          <Ingress className="flere-tjenester-header">Flere tjenester</Ingress>
          <Lenkeliste lenker={lenker} />
        </Panel>
      </div>
    </>
  );
}

export default App;
