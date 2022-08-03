import { IconButtonProps, icons } from "./IconButton.props";
import cn from "classnames";
import styles from "./IconButton.module.css";

export function IconButton({
  color,
  icon,
  variant,
  children,
  className,
  ...props
}: IconButtonProps): JSX.Element {
  const Icon = icons[icon];

  return (
    <button
      className={cn(className, styles.iconButton, {
        [styles.bold]: variant === "bold",
        [styles.blue]: color === "blue",
        [styles.red]: color === "red",
        [styles.pink]: color === "pink",
        [styles.gray]: color === "gray",
        [styles.green]: color === "green",
      })}
      {...props}
    >
      {children}
      <Icon className={styles.icon} />
    </button>
  );
}
