import Rive from "@rive-app/react-canvas";
import styles from "./RiveSettings.module.scss";

type EHRiveProperties = { filename: string; stateMachineName: string };

export function EHRive({ filename, stateMachineName }: EHRiveProperties) {
  return (
    <Rive
      src={filename}
      stateMachines={stateMachineName}
      className={styles.ehRive}
      style={{ verticalAlign: "center", width: "auto", height: "auto" }}
    />
  );
}
