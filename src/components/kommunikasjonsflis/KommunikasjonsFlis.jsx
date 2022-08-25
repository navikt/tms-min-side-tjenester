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
            {translate.formatMessage({ id: "lenkepanel.hoyre.tittel" })}
          </Heading>
          <KommunikasjonsElement
            href={innboksUrl}
            tittel="lenkepanel.hoyre.lenketekst.innboks"
            ingress="lenkepanel.hoyre.ingress.innboks"
            ikon={<Email />}
          />
          <KommunikasjonsElement
            href={dialogMedVeilederUrl}
            tittel="lenkepanel.hoyre.lenketekst.dialog"
            ingress="lenkepanel.hoyre.ingress.dialog"
            ikon={<DialogDots />}
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
                {translate.formatMessage({ id: "lenkepanel.hoyre.lenketekst.innboks" })}
              </LinkPanel.Title>
            </div>
          </LinkPanel>
        </section>
      )}
    </>
  );
};

export default KommunikasjonsFlis;
