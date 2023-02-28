import LanguageProvider from "./utils/LanguageProvider";
import { initializeAmplitude } from "./utils/amplitude";
import App from "./App";

const Mikrofrontend = () => {
  initializeAmplitude();

  return (
    <LanguageProvider defaultSprak="nb">
      <App />
    </LanguageProvider>
  );
};

export default Mikrofrontend;
