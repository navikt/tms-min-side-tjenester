import { useIntl } from "react-intl";
import { logAmplitudeEvent } from "../../utils/amplitude";
import { Detail } from "@navikt/ds-react";
import { Next, FileContent } from "@navikt/ds-icons";
import i18n from "../../language/i18n";
import CSS from "./SakstemaElement.module.css";
import "dayjs/locale/nb";

const SakstemaElement = ({ href, sakstema, sistEndret }) => {
  const translate = useIntl();
  const { formatDateMonth } = i18n[translate.locale];

  return (
    <a className={CSS.element} href={href} onClick={() => logAmplitudeEvent("Siste saker - " + sakstema)}>
      <div className={CSS.content_wrapper}>
        <div className={CSS.ikon}>
          <FileContent fontSize="1.375rem" />
        </div>
        <div>
          <div className={CSS.lenketekst}>{sakstema}</div>
          <Detail spacing className={CSS.dato}>
            {translate.formatMessage({ id: "siste.saker.lenkedetail" }) + formatDateMonth(sistEndret)}
          </Detail>
        </div>
      </div>
      <Next className={CSS.chevron} fontSize="1.5rem" />
    </a>
  );
};

export default SakstemaElement;
