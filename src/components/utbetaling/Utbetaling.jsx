import React from "react";
import { useIntl } from "react-intl";
import { LinkPanel } from "@navikt/ds-react";
import { utbetalingsoversiktUrl } from "../../api/urls";
import { Money } from "@navikt/ds-icons";
import "./Utbetaling.css";
import { logAmplitudeEvent } from "../../utils/amplitude";

const Utbetaling = ({ className }) => {
  const translate = useIntl();
  console.log(utbetalingsoversiktUrl);

  return (
    <>
      <LinkPanel
        className={className}
        href={utbetalingsoversiktUrl}
        border={false}
        onClick={() => logAmplitudeEvent("Dine utbetalinger")}
      >
        <div className="content-wrapper">
          <div className="utbetalings-ikon">
            <Money />
          </div>
          <LinkPanel.Title className="utbetalings-tekst">
            {translate.formatMessage({ id: "utbetalinger.lenketekst" })}
          </LinkPanel.Title>
        </div>
      </LinkPanel>
    </>
  );
};

export default Utbetaling;
