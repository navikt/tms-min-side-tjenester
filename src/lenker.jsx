import {
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
    tittel: "Ledige stillinger",
    url: stillingerUrl,
  },
  uforetrygd: {
    tittel: "Uføretrygd",
    url: uforetrygdUrl,
  },
  dineForeldrepenger: {
    tittel: "Dine foreldrepenger",
    url: foreldrepengerUrl,
  },
  aktivitetsplan: {
    tittel: "Aktivitetsplan",
    url: aktivitetsplanUrl,
  },
  meldekort: {
    tittel: "Meldekort",
    url: meldekortUrl,
  },
  personopplysninger: {
    tittel: "Personopplysninger",
    url: personopplysningerUrl,
  },
  skjemaer: {
    tittel: "Skjemaer",
    url: skjemaerUrl,
  },
  dinPensjon: {
    tittel: "Din pensjon",
    url: pensjonUrl,
  },
  dineStillingssok: {
    tittel: "Dine stillingssøk",
    url: stillingsokUrl,
  },
  veilederArbeidssoker: {
    tittel: "Veileder for arbeidssøker",
    url: arbeidssokerUrl,
  },
  registrerDegSomArbeidssoker: {
    tittel: "Registrer deg som arbeidssøker",
    url: arbeidssokerRegistreringUrl,
  },
  sosialhjelp: {
    tittel: "Økonomisk Sosialhjelp",
    url: sosialhjelpUrl,
  },
  dineFullmakter: {
    tittel: "Dine fullmakter",
    url: fullmakterUrl,
  },
  dinePleiepenger: {
    tittel: "Dine pleiepenger",
    url: pleiepengerUrl,
  },
  dittSykefravaer: {
    tittel: "Ditt sykefravær",
    url: sykefravaerUrl,
  },
  hjelpemidler: {
    tittel: "Hjelpemidler",
    url: hjelpemidlerUrl,
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
