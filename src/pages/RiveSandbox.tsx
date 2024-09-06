import { EHRive } from "../components/RiveSettings";
import styles from "./RiveSandbox.module.scss";

export function RiveSandbox() {
  return (
    <>
      <div className={styles.riveSandbox}>
        <h1>Early Bird Pricing</h1>
      </div>
      <div>
        <EHRive
          // filename={"assets/rive/myrivefile.riv"}
          filename={"assets/rive/brandnewdesigns_interaction-v1.riv"}
          stateMachineName="State Machine 1"
        />
      </div>
    </>
  );
}
