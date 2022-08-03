import { InputProps } from "./Input.props";
import cn from "classnames";
import styles from "./Input.module.css";

export function Input({ className, ...props }: InputProps): JSX.Element {
  return (
    <div className={cn(className, styles.inputWrapper)}>
      <input className={cn(styles.input)} {...props} />
    </div>
  );
}
