import React from "react";
import { useIntl } from "react-intl";
import { Link } from "@navikt/ds-react";
import { logAmplitudeEvent } from "../utils/amplitude";
import CSS from "./Lenkeliste.module.css";

const Lenkeliste = ({ lenker }) => {
  const translate = useIntl();

  return (
    <nav className={CSS.nav}>
      {lenker.map((lenke) => {
        return (
          <div className={CSS.link} key={lenke.url}>
            <Link href={lenke.url} onClick={() => logAmplitudeEvent("Flere tjenester - " + lenke.tittel)}>
              {translate.formatMessage({ id: lenke.tittel })}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};

export default Lenkeliste;
