import useScript from "../../../hooks/useScript";
import "./UXSignal.css";

const UXTestComponent = ({ ready }) => {
  useScript(ready);

  return <div data-uxsignals-embed="study-5x0zp08elt" style={{ maxWidth: "600px" }} />;
};

export default UXTestComponent;
