import React from "react";
import { BodyLong, Heading, Link, Panel } from "@navikt/ds-react";
import { useIntl } from "react-intl";
import style from "./UXTweak.module.css";
import { UXTweakUrl } from "../../../api/urls";

const UXTweak = () => {
  const translate = useIntl();

  return (
    <Panel className={style.panel}>
      <Heading spacing level="2" size="small" className={style.tittel}>
        {translate.formatMessage({ id: "uxtweak.tittel" })}
      </Heading>
      <BodyLong className={style.ingress}>{translate.formatMessage({ id: "uxtweak.ingress-1" })}</BodyLong>
      <BodyLong className={style.ingress}>{translate.formatMessage({ id: "uxtweak.ingress-2" })}</BodyLong>
      <Link href={UXTweakUrl}>{translate.formatMessage({ id: "uxtweak.lenketekst" })}</Link>
    </Panel>
  );
};

export default UXTweak;
