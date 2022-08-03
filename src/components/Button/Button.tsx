import { ButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.css";

export function Button({
  color = "blue",
  children,
  className,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(className, styles.button, {
        [styles.blue]: color === "blue",
        [styles.red]: color === "red",
        [styles.pink]: color === "pink",
        [styles.gray]: color === "gray",
        [styles.green]: color === "green",
      })}
      {...props}
    >
      {children}
    </button>
  );
}
