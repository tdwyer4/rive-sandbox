import { EHRive } from "../components/RiveSettings";
import styles from "./RiveSandbox.module.scss";

export function RiveSandbox() {
  return (
    <div className={styles.RiveSandbox}>
      <div className="title-container">
        <h1>Early Bird Pricing Interaction</h1>
      </div>
      <EHRive
        // filename={"assets/rive/myrivefile.rive"}
        filename={"assets/rive/ebi-test.riv"}
        stateMachineName="State Machine 1"
      />
    </div>
  );
}
