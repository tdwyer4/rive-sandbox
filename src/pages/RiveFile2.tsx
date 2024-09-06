import { EHRive } from "../components/RiveSettings";
import styles from "./RiveSandbox.module.scss";

export function RiveFileTwo() {
  return (
    <div className={styles.riveContainer}>
      <div className={styles.riveSandbox}>
        <h1>Brand New Designs</h1>
      </div>
      <div>
        <EHRive
          // filename={"assets/rive/myrivefile.riv"}
          filename={"assets/rive/brandnewdesigns_interaction-v1.riv"}
          stateMachineName="State Machine 1"
        />
      </div>
    </div>
  );
}
