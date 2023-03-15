import React, { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageProvider";
import { text } from "../../language/text";
import { LinkPanel } from "@navikt/ds-react";
import { utbetalingsoversiktUrl } from "../../api/urls";
import { Money } from "@navikt/ds-icons";
import { logAmplitudeEvent } from "../../utils/amplitude";
import CSS from "./Utbetaling.module.css";

const Utbetaling = ({ size }) => {
  const language = useContext(LanguageContext);

  return (
    <>
      <LinkPanel
        className={size === "large" ? CSS.flis_large : CSS.flis}
        href={utbetalingsoversiktUrl}
        border={false}
        onClick={() => logAmplitudeEvent("Dine utbetalinger")}
      >
        <div className={CSS.content_wrapper}>
          <div className={CSS.ikon}>
            <Money fontSize="1.375rem" />
          </div>
          <LinkPanel.Title className={CSS.tekst}>{text.utbetalingerLenketekst[language]}</LinkPanel.Title>
        </div>
      </LinkPanel>
    </>
  );
};

export default Utbetaling;
