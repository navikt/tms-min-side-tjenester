import { Bandage, DirectionSign, FillForms, PensionBag } from "@navikt/ds-icons";
import { arbeidUrl, dinPensjonUrl, soknadUrl, sykefravaerUrl } from "../../api/urls";
import Flis from "./Flis";
import CSS from "./GenerelleFliser.module.css";

const GenerelleFliser = () => {
  return (
    <section className={CSS.wrapper}>
      <Flis tittel="generellefliser.sykefravaer-tittel" ikon={<Bandage />} href={sykefravaerUrl} />
      <Flis tittel="generellefliser.mistet.jobb-tittel" ikon={<DirectionSign />} href={arbeidUrl} />
      <Flis tittel="generellefliser.skjemaer-tittel" ikon={<FillForms />} href={soknadUrl} />
      <Flis tittel="generellefliser.pensjon-tittel" ikon={<PensionBag />} href={dinPensjonUrl} />
    </section>
  );
};

export default GenerelleFliser;
