import React, { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageProvider";
import { text } from "../../../language/text";
import { BodyLong, Heading, Link, Panel } from "@navikt/ds-react";
import style from "./UXTweak.module.css";
import { UXTweakUrl } from "../../../api/urls";

const UXTweak = () => {
  const language = useContext(LanguageContext);

  return (
    <Panel className={style.panel}>
      <Heading spacing level="2" size="small" className={style.tittel}>
        {text.uxTweakTittel[language]}
      </Heading>
      <BodyLong className={style.ingress}>{text.uxTweakIngress1[language]}</BodyLong>
      <BodyLong className={style.ingress}>{text.uxTweakIngress2[language]}</BodyLong>
      <Link href={UXTweakUrl} target="_blank">
        {text.uxTweakLenketekst[language]}
      </Link>
    </Panel>
  );
};

export default UXTweak;
