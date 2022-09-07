import React from "react";
import { useIntl } from "react-intl";
import { LinkPanel, Panel, Heading } from "@navikt/ds-react";
import { dialogMedVeilederUrl, innboksUrl, mineSakerUrl } from "../../api/urls";
import { logAmplitudeEvent } from "../../utils/amplitude";
import KommunikasjonsElement from "./KommunikasjonsElement";
import { DialogDots, Email } from "@navikt/ds-icons";
import CSS from "./KommunikasjonsFlis.module.css";

const KommunikasjonsFlis = ({ size }) => {
  const translate = useIntl();
  return (
    <>
      {size === "large" ? (
        <Panel className={CSS.large}>
          <Heading spacing level="2" size="medium">
            {translate.formatMessage({ id: "kommunikasjonsflis.tittel" })}
          </Heading>
          <KommunikasjonsElement
            href={innboksUrl}
            tittel="kommunikasjonsflis.lenketekst.innboks"
            ingress="kommunikasjonsflis.ingress.innboks"
            ikon={<Email fontSize="1.375rem" />}
          />
          <KommunikasjonsElement
            href={dialogMedVeilederUrl}
            tittel="kommunikasjonsflis.lenketekst.dialog"
            ingress="kommunikasjonsflis.ingress.dialog"
            ikon={<DialogDots fontSize="1.375rem" />}
          />
        </Panel>
      ) : (
        <section onClick={() => logAmplitudeEvent("Innboks liten")}>
          <LinkPanel href={innboksUrl} border={false} className={CSS.small}>
            <div className={CSS.content_wrapper}>
              <div className={CSS.ikon_wrapper}>
                <Email />
              </div>
              <LinkPanel.Title className={CSS.small_tittel}>
                {translate.formatMessage({ id: "kommunikasjonsflis.lenketekst.innboks" })}
              </LinkPanel.Title>
            </div>
          </LinkPanel>
        </section>
      )}
    </>
  );
};

export default KommunikasjonsFlis;
