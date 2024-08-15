import Rive from "@rive-app/react-canvas";
import "./EHRive.css";

type EHRiveProperties = { filename: string; stateMachineName: string };

export function EHRive({ filename, stateMachineName }: EHRiveProperties) {
  return (
    <Rive
      src={filename}
      stateMachines={stateMachineName}
      className={"ehRive"}
      style={{ verticalAlign: "center", width: "auto", height: "auto" }}
    />
  );
}
