import useScript from "../../hooks/useScript";

const UXTestComponent = () => {
  useScript(true);

  return <div data-uxsignals-embed="study-1234abcd" style={{ maxWidth: "620px" }} />;
};

export default UXTestComponent;
