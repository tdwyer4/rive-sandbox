import classNames from "classnames";
import styles from "./BaseButton.module.css";

type BaseButtonProperties = {
  title: string;
  onClick: () => void;
  className?: string;
};

export function BaseButton({
  title,
  onClick,
  className,
}: BaseButtonProperties) {
  return (
    <button className={classNames(styles.root, className)} onClick={onClick}>
      {title}
    </button>
  );
}

export function PrimaryButton({ title, ...props }: BaseButtonProperties) {
  const newTitle = "somethingTItle" + title;
  return <BaseButton title={newTitle} {...props} />;
}

export function GhostButton({ ...props }: BaseButtonProperties) {
  return <BaseButton className={styles.ghost} {...props} />;
}
