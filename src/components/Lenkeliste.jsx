import React, { useContext } from "react";
import { LanguageContext } from "../utils/LanguageProvider";
import { text } from "../language/text";
import { Link } from "@navikt/ds-react";
import { logAmplitudeEvent } from "../utils/amplitude";
import CSS from "./Lenkeliste.module.css";

const Lenkeliste = ({ lenker }) => {
  const language = useContext(LanguageContext);

  return (
    <nav className={CSS.nav}>
      {lenker.map((lenke) => {
        return (
          <div className={CSS.link} key={lenke.url}>
            <Link href={lenke.url} onClick={() => logAmplitudeEvent("Flere tjenester - " + lenke.tittel)}>
              {lenke[language]}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};

export default Lenkeliste;
