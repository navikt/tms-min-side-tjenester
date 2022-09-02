import { Bandage, DirectionSign, FillForms, PensionBag } from "@navikt/ds-icons";
import { arbeidUrl, dinPensjonUrl, soknadUrl, sykefravaerUrl } from "../../api/urls";
import Flis from "./Flis";
import CSS from "./GenerelleFliser.module.css";

const GenerelleFliser = () => {
  return (
    <section className={CSS.wrapper}>
      <Flis tittel="generellefliser.sykefravaer-tittel" ikon={<Bandage fontSize="1.375rem" />} href={sykefravaerUrl} />
      <Flis tittel="generellefliser.mistet.jobb-tittel" ikon={<DirectionSign fontSize="1.375rem" />} href={arbeidUrl} />
      <Flis tittel="generellefliser.skjemaer-tittel" ikon={<FillForms fontSize="1.375rem" />} href={soknadUrl} />
      <Flis tittel="generellefliser.pensjon-tittel" ikon={<PensionBag fontSize="1.375rem" />} href={dinPensjonUrl} />
    </section>
  );
};

export default GenerelleFliser;
