import { useEffect } from "react";
import { useIntl } from "react-intl";
import { LinkPanel } from "@navikt/ds-react";
import { utbetalingsoversiktUrl } from "../../api/urls";
import { Money } from "@navikt/ds-icons";
import { logAmplitudeEvent, logAmplitudeEventWhenComponentInViewport } from "../../utils/amplitude";
import CSS from "./Utbetaling.module.css";

const Utbetaling = ({ size, forwardedRef, enterCount, leaveCount }) => {
  const translate = useIntl();

  useEffect(() => {
    logAmplitudeEventWhenComponentInViewport("Utbetaling", enterCount, leaveCount);
  });

  return (
    <div ref={forwardedRef}>
      <LinkPanel
        className={size === "large" ? CSS.flis_large : CSS.flis}
        href={utbetalingsoversiktUrl}
        border={false}
        onClick={() => logAmplitudeEvent("Dine utbetalinger")}
        ref={forwardedRef}
      >
        <div className={CSS.content_wrapper}>
          <div className={CSS.ikon}>
            <Money fontSize="1.375rem" />
          </div>
          <LinkPanel.Title className={CSS.tekst}>
            {translate.formatMessage({ id: "utbetalinger.lenketekst" })}
          </LinkPanel.Title>
        </div>
      </LinkPanel>
    </div>
  );
};

export default Utbetaling;
