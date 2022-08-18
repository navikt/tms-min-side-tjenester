import React from "react";
import { Link } from "@navikt/ds-react";
import "./Lenkeliste.css";
import { logAmplitudeEvent } from "../utils/amplitude";

const Lenkeliste = ({ lenker }) => (
  <nav className="flere-tjenester-nav">
    {lenker.map((lenke) => {
      return (
        <div className="flere-tjenster-link" key={lenke.url}>
          <Link href={lenke.url} onClick={() => logAmplitudeEvent("Flere tjenester - " + lenke.tittel)}>
            {lenke.tittel}
          </Link>
        </div>
      );
    })}
  </nav>
);

export default Lenkeliste;
