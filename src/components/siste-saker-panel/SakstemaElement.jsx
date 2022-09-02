import { useIntl } from "react-intl";
import { logAmplitudeEvent } from "../../utils/amplitude";
import { Link, Detail } from "@navikt/ds-react";
import { Next, FileContent } from "@navikt/ds-icons";
import i18n from "../../language/i18n";
import CSS from "./SakstemaElement.module.css";

const SakstemaElement = ({ href, sakstema, sistEndret }) => {
  const translate = useIntl();
  const { formatDateAndTime } = i18n[translate.locale];

  return (
    <div className={CSS.element} onClick={() => logAmplitudeEvent("Siste saker - " + sakstema)}>
      <div className={CSS.content_wrapper}>
        <div className={CSS.ikon}>
          <FileContent fontSize="1.375rem" />
        </div>
        <div>
          <Link href={href} className={CSS.lenke}>
            {sakstema}
          </Link>
          <Detail spacing className={CSS.dato}>
            {translate.formatMessage({ id: "lenkepanel.venstre.lenkedetail" }) + formatDateAndTime(sistEndret)}
          </Detail>
        </div>
      </div>
      <Next className={CSS.chevron} fontSize="1.5rem" />
    </div>
  );
};

export default SakstemaElement;
