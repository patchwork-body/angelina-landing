import classNames from "classnames";
import { CSSProperties, FC } from "react";
import styles from "./icon.module.css";

type IconNames = "vk" | "te" | "in";

export const Icon: FC<{ name: IconNames; className?: string }> = ({ name, className }) => {
  return (
    <div
      role="image"
      className={classNames("bg-current", styles.icon, className)}
      style={{ "--image": `url("/${name}.svg")` } as CSSProperties}
    />
  );
};
