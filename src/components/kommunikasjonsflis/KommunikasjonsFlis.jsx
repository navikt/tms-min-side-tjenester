import React, { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageProvider";
import { text } from "../../language/text";
import { LinkPanel, Panel, Heading } from "@navikt/ds-react";
import { dialogMedVeilederUrl, innboksUrl } from "../../api/urls";
import { logAmplitudeEvent } from "../../utils/amplitude";
import KommunikasjonsElement from "./KommunikasjonsElement";
import { DialogDots, Email } from "@navikt/ds-icons";
import CSS from "./KommunikasjonsFlis.module.css";

const KommunikasjonsFlis = ({ size }) => {
  const language = useContext(LanguageContext);

  return (
    <>
      {size === "large" ? (
        <Panel className={CSS.large}>
          <Heading spacing level="2" size="medium">
            {text.kommunikasjonsFlisTittel[language]}
          </Heading>
          <KommunikasjonsElement
            href={innboksUrl}
            tittel={text.kommunikasjonsFlisLenketekstInnboks[language]}
            ingress={text.kommunikasjonsFlisIngressInnboks[language]}
            ikon={<Email fontSize="1.375rem" />}
          />
          <KommunikasjonsElement
            href={dialogMedVeilederUrl}
            tittel={text.kommunikasjonsFlisLenketekstDialog[language]}
            ingress={text.kommunikasjonsFlisIngressDialog[language]}
            ikon={<DialogDots fontSize="1.375rem" />}
          />
        </Panel>
      ) : (
        <section onClick={() => logAmplitudeEvent("Innboks liten")}>
          <LinkPanel href={innboksUrl} border={false} className={CSS.small}>
            <div className={CSS.content_wrapper}>
              <div className={CSS.ikon_wrapper}>
                <Email fontSize="22px" />
              </div>
              <LinkPanel.Title className={CSS.small_tittel}>
                {text.kommunikasjonsFlisLenketekstInnboks[language]}
              </LinkPanel.Title>
            </div>
          </LinkPanel>
        </section>
      )}
    </>
  );
};

export default KommunikasjonsFlis;
