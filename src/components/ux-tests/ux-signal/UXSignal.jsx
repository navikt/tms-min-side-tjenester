import useScript from "../../../hooks/useScript";
import "./UXSignal.css";

const UXTestComponent = ({ ready }) => {
  useScript(ready);

  return <div data-uxsignals-embed="study-e9xppur4dh" style={{ maxWidth: "620px" }} />;
};

export default UXTestComponent;
