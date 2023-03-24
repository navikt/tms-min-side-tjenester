import React, { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageProvider";
import { text } from "../../language/text";
import { logAmplitudeEvent } from "../../utils/amplitude";
import { formatDateMonth } from "../../language/i18n";
import { Detail } from "@navikt/ds-react";
import { Next, FileContent } from "@navikt/ds-icons";
import CSS from "./SakstemaElement.module.css";

const SakstemaElement = ({ href, sakstema, sistEndret }) => {
  const language = useContext(LanguageContext);

  return (
    <a className={CSS.element} href={href} onClick={() => logAmplitudeEvent("Siste saker - " + sakstema)}>
      <div className={CSS.content_wrapper}>
        <div className={CSS.ikon}>
          <FileContent fontSize="1.375rem" />
        </div>
        <div>
          <div className={CSS.lenketekst}>{sakstema}</div>
          <Detail spacing className={CSS.dato}>
            {text.sisteSakerLenkedetail[language] + formatDateMonth(sistEndret)}
          </Detail>
        </div>
      </div>
      <Next className={CSS.chevron} fontSize="1.5rem" />
    </a>
  );
};

export default SakstemaElement;
