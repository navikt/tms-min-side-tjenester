import { useIntl } from "react-intl";
import { Link, Detail } from "@navikt/ds-react";
import { Next } from "@navikt/ds-icons";
import "./KommunikasjonsElement.css";
import { logAmplitudeEvent } from "../../utils/amplitude";

const KommunikasjonsElement = ({ href, tittel, ingress, ikon }) => {
  const translate = useIntl();

  return (
    <a
      className="kommunikasjons-element"
      href={href}
      onClick={() => logAmplitudeEvent(translate.formatMessage({ id: tittel }))}
    >
      <div className="content-wrapper">
        <div className="kommunikasjons-ikon-wrapper">{ikon}</div>
        <div>
          <Link className="kommunikasjons-lenke">{translate.formatMessage({ id: tittel })}</Link>
          <Detail spacing className="dato-label">
            {translate.formatMessage({ id: ingress })}
          </Detail>
        </div>
      </div>
      <Next className="chevron" />
    </a>
  );
};

export default KommunikasjonsElement;
