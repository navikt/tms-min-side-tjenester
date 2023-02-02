import React from "react";
import { useQuery } from "react-query";
import handleViewport from "react-in-viewport";
import { oppfolgingUrl } from "./api/urls";
import { fetcher } from "./api/api";
import { Heading, Panel } from "@navikt/ds-react";
import { generelleLenker, oppfolgingsLenker } from "./lenker";
import Lenkeliste from "./components/Lenkeliste";
import Utbetaling from "./components/utbetaling/Utbetaling";
import KommunikasjonsFlis from "./components/kommunikasjonsflis/KommunikasjonsFlis";
import SisteSakerPanel from "./components/siste-saker-panel/SisteSakerPanel";
import GenerelleFliser from "./components/generelle-fliser/GenerelleFliser";
import ContentLoader from "./components/content-loader/ContentLoader";
import CSS from "./App.module.css";
import "@navikt/ds-css";

function App() {
  const { data, isLoading } = useQuery(oppfolgingUrl, fetcher);
  const brukerUnderOppfolging = data?.erBrukerUnderOppfolging;
  const lenker = brukerUnderOppfolging ? oppfolgingsLenker : generelleLenker;

  const ViewportUtbetaling = handleViewport(Utbetaling);

  if (isLoading) {
    return <ContentLoader />;
  }

  return (
    <>
      <section className={CSS.page_wrapper_microfrontend}>
        <section className="min-side-lenkepanel">
          <section className={brukerUnderOppfolging ? CSS.lenkepanel_stor_wrapper : CSS.lenkepanel_liten_wrapper}>
            <ViewportUtbetaling size={brukerUnderOppfolging ? "large" : "small"} />
            <KommunikasjonsFlis size={brukerUnderOppfolging ? "large" : "small"} />
          </section>
          <SisteSakerPanel />
        </section>
        {brukerUnderOppfolging ? null : <GenerelleFliser />}
        <div className={CSS.flereTjenester}>
          <Panel className={CSS.flereTjenester}>
            <Heading spacing level="2" size="medium" className={CSS.flere_tjenester_header}>
              Flere tjenester
            </Heading>
            <Lenkeliste lenker={lenker} />
          </Panel>
        </div>
      </section>
    </>
  );
}

export default App;
