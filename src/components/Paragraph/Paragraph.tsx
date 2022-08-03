import { ParagraphProps } from "./Paragraph.props";
import cn from "classnames";
import styles from "./Paragraph.module.css";

export function Paragraph({
  children,
  size,
  color,
  className,
  ...props
}: ParagraphProps): JSX.Element {
  return (
    <p
      className={cn(className, styles.p, {
        [styles.gray]: color === "gray",
        [styles.md]: size === "md",
        [styles.lg]: size === "lg",
        [styles.sm]: size === "sm",
      })}
      {...props}
    >
      {children}
    </p>
  );
}
