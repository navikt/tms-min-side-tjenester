import React, { useContext } from "react";
import useSWRImmutable from "swr/immutable";
import { LanguageContext } from "../../utils/LanguageProvider";
import { text } from "../../language/text";
import { fetcher } from "../../api/api";
import { LinkPanel, Panel, Heading } from "@navikt/ds-react";
import { mineSakerUrl, sakerApiUrl } from "../../api/urls";
import { logAmplitudeEvent } from "../../utils/amplitude";
import SakstemaElement from "./SakstemaElement";
import { FileContent } from "@navikt/ds-icons";
import CSS from "./SisteSakerPanel.module.css";

const SisteSakerPanel = () => {
  const { data: saker } = useSWRImmutable(sakerApiUrl, fetcher);

  const language = useContext(LanguageContext);

  const visStortSakspanel = saker?.sakstemaer?.length > 0;

  return (
    <>
      {visStortSakspanel ? (
        <Panel className={CSS.panel}>
          <div className={CSS.heading}>
            <Heading spacing level="2" size="medium">
              {text.sisteSakerTittel[language]}
            </Heading>
            <a
              className={CSS.alle_saker}
              href={mineSakerUrl}
              onClick={() => logAmplitudeEvent("Siste saker - Se alle")}
            >
              {text.seAlle[language]}
            </a>
          </div>
          {saker?.sakstemaer.slice(0, 2).map((sak) => (
            <SakstemaElement
              key={sak.kode}
              href={sak.detaljvisningUrl}
              sakstema={sak.navn}
              sistEndret={sak.sistEndret}
            />
          ))}
        </Panel>
      ) : (
        <LinkPanel
          href={mineSakerUrl}
          border={false}
          className={CSS.panel_liten}
          onClick={() => logAmplitudeEvent("Siste saker liten")}
        >
          <div
            style={{
              display: "grid",
              gridAutoFlow: "column",
              gap: "var(--navds-spacing-8)",
              alignItems: "center",
            }}
          >
            <div className={CSS.ikon}>
              <FileContent fontSize="1.375rem" />
            </div>
            <LinkPanel.Title className={CSS.panel_liten_tittel}>{text.sisteSakerTittel[language]}</LinkPanel.Title>
          </div>
        </LinkPanel>
      )}
    </>
  );
};

export default SisteSakerPanel;
