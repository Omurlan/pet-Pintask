import { CardProps } from "./Card.props";
import cn from "classnames";
import styles from "./Card.module.css";

export function Card({
  children,
  className,
  ...props
}: CardProps): JSX.Element {
  return (
    <div className={cn(className, styles.card)} {...props}>
      {children}
    </div>
  );
}
