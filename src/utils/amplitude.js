import { init, track } from "@amplitude/analytics-browser";

export const komponent = {
  sakstemaListe: "Sakstemaliste",
};

export const initializeAmplitude = () => {
  init("default", undefined, {
    useBatch: true,
    serverUrl: "https://amplitude.nav.no/collect-auto",
    ingestionMetadata: {
      sourceName: window.location.toString(),
    },
  });
};

export const logAmplitudeEvent = (komponent) => {
  track("navigere", {
    komponent,
  });
};
