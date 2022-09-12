import { useIntl } from "react-intl";
import { Detail } from "@navikt/ds-react";
import { Next } from "@navikt/ds-icons";
import { logAmplitudeEvent } from "../../utils/amplitude";
import CSS from "./KommunikasjonsElement.module.css";

const KommunikasjonsElement = ({ href, tittel, ingress, ikon }) => {
  const translate = useIntl();

  return (
    <a className={CSS.element} href={href} onClick={() => logAmplitudeEvent(translate.formatMessage({ id: tittel }))}>
      <div className={CSS.content_wrapper}>
        <div className={CSS.ikon}>{ikon}</div>
        <div>
          <div className={CSS.lenke}>{translate.formatMessage({ id: tittel })}</div>
          <Detail spacing className={CSS.dato}>
            {translate.formatMessage({ id: ingress })}
          </Detail>
        </div>
      </div>
      <Next className={CSS.chevron} />
    </a>
  );
};

export default KommunikasjonsElement;
