import { IParagraphProps } from "./Span.props"
import styles from "./Span.module.scss"
import cn from "classnames"

export const Span = ({ children, size, className, ...props }: IParagraphProps): JSX.Element => {
    return (
        <span
            className={cn(className, {
                [styles.xs]: size == "xs",
                [styles.s]: size == "s",
                [styles.m]: size == "m",
                [styles.l]: size == "l",

            })}
        >
            {children}
        </span>
    )
}