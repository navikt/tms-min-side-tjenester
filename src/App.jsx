import React from "react";
import { useQuery } from "react-query";
import { oppfolgingUrl } from "./api/urls";
import { fetcher } from "./api/api";
import { Heading, Panel } from "@navikt/ds-react";
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
      <section className="page-wrapper-microfrontend">
        <section className="min-side-lenkepanel">
          <section className={brukerUnderOppfolging ? "lenkepanel-stor-wrapper" : "lenkepanel-liten-wrapper"}>
            <Utbetaling className={brukerUnderOppfolging ? "utbetalings-flis-stor" : "utbetalings-flis"} />
            <KommunikasjonsFlis size={brukerUnderOppfolging ? "large" : "small"} />
          </section>
          <SisteSakerPanel />
        </section>
        <GenerelleFliser />
        {brukerUnderOppfolging ? null : <GenerelleFliser />}
      </section>
      <div className="flere-tjenester">
        <Panel>
          <Heading spacing level="2" size="medium" className="flere-tjenester-header">
            Flere tjenester
          </Heading>
          <Lenkeliste lenker={lenker} />
        </Panel>
      </div>
    </>
  );
}

export default App;
