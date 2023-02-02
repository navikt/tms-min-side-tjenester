import { useEffect } from "react";
import amplitude from "amplitude-js";

export const komponent = {
  sakstemaListe: "Sakstemaliste",
};

export const initializeAmplitude = () => {
  amplitude.getInstance().init("default", "", {
    apiEndpoint: "amplitude.nav.no/collect-auto",
    saveEvents: false,
    includeUtm: true,
    includeReferrer: true,
    platform: window.location.toString(),
  });
};

export function logAmplitudeEvent(komponent) {
  amplitude.getInstance().logEvent("navigere", {
    komponent,
  });
}

export function logAmplitudeEventWhenComponentInViewport(komponent, enterCount, leaveCount) {
  if (enterCount === 1 && leaveCount === 0) {
    console.log("test");
    amplitude.getInstance().logEvent("komponent vist", {
      komponent,
    });
  }
}
