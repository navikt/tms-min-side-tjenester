import { Detail } from "@navikt/ds-react";
import { Next } from "@navikt/ds-icons";
import { logAmplitudeEvent } from "../../utils/amplitude";
import CSS from "./KommunikasjonsElement.module.css";

const KommunikasjonsElement = ({ href, tittel, ingress, ikon }) => {
  return (
    <a className={CSS.element} href={href} onClick={() => logAmplitudeEvent(tittel)}>
      <div className={CSS.content_wrapper}>
        <div className={CSS.ikon}>{ikon}</div>
        <div>
          <div className={CSS.lenke}>{tittel}</div>
          <Detail spacing className={CSS.dato}>
            {ingress}
          </Detail>
        </div>
      </div>
      <Next className={CSS.chevron} />
    </a>
  );
};

export default KommunikasjonsElement;
