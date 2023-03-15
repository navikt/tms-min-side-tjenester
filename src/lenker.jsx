import React, { useContext } from "react";
import { LanguageContext } from "./utils/LanguageProvider";
import { text } from "./language/text";
import {
  arbeidsavklaringspengerUrl,
  aktivitetsplanUrl,
  arbeidssokerRegistreringUrl,
  arbeidssokerUrl,
  foreldrepengerUrl,
  fullmakterUrl,
  hjelpemidlerUrl,
  meldekortUrl,
  pensjonUrl,
  personopplysningerUrl,
  pleiepengerUrl,
  skjemaerUrl,
  sosialhjelpUrl,
  stillingerUrl,
  stillingsokUrl,
  sykefravaerUrl,
  uforetrygdUrl,
} from "./api/urls";

export const lenker = {
  ledigeStillinger: {
    tittel: "ledige.stillinger",
    url: stillingerUrl,
  },
  uforetrygd: {
    tittel: "uforetrygd",
    url: uforetrygdUrl,
  },
  dineForeldrepenger: {
    tittel: "dine.foreldrepenger",
    url: foreldrepengerUrl,
  },
  aktivitetsplan: {
    tittel: "aktivitetsplan",
    url: aktivitetsplanUrl,
  },
  meldekort: {
    tittel: "meldekort",
    url: meldekortUrl,
  },
  personopplysninger: {
    tittel: "personopplysninger",
    url: personopplysningerUrl,
  },
  skjemaer: {
    tittel: "skjemaer",
    url: skjemaerUrl,
  },
  dinPensjon: {
    tittel: "din.pensjon",
    url: pensjonUrl,
  },
  dineStillingssok: {
    tittel: "dine.stillingssok",
    url: stillingsokUrl,
  },
  veilederArbeidssoker: {
    tittel: "veileder.arbeidssoker",
    url: arbeidssokerUrl,
  },
  registrerDegSomArbeidssoker: {
    tittel: "registrer.deg.som.arbeidssoker",
    url: arbeidssokerRegistreringUrl,
  },
  sosialhjelp: {
    tittel: "sosialhjelp",
    url: sosialhjelpUrl,
  },
  dineFullmakter: {
    tittel: "dine.fullmakter",
    url: fullmakterUrl,
  },
  dinePleiepenger: {
    tittel: "dine.pleiepenger",
    url: pleiepengerUrl,
  },
  dittSykefravaer: {
    tittel: "ditt.sykefravaer",
    url: sykefravaerUrl,
  },
  hjelpemidler: {
    tittel: "hjelpemidler",
    url: hjelpemidlerUrl,
  },
  arbeidsavklaringspenger: {
    tittel: "arbeidsavklaringspenger",
    url: arbeidsavklaringspengerUrl,
  },
};

export const generelleLenker = [
  lenker.ledigeStillinger,
  lenker.aktivitetsplan,
  lenker.personopplysninger,
  lenker.uforetrygd,
  lenker.meldekort,
  lenker.dineFullmakter,
  lenker.sosialhjelp,
  lenker.registrerDegSomArbeidssoker,
  lenker.dinePleiepenger,
  lenker.dineForeldrepenger,
  lenker.dineStillingssok,
  lenker.hjelpemidler,
];

export const oppfolgingsLenker = [
  lenker.sosialhjelp,
  lenker.arbeidsavklaringspenger,
  lenker.dinPensjon,
  lenker.dineFullmakter,
  lenker.dittSykefravaer,
  lenker.uforetrygd,
  lenker.dinePleiepenger,
  lenker.skjemaer,
  lenker.hjelpemidler,
  lenker.meldekort,
  lenker.dineForeldrepenger,
  lenker.personopplysninger,
];
