import { IParagraphProps } from "./Paragraph.props"
import styles from "./Paragraph.module.scss"
import cn from "classnames"

export const Paragraph = ({ children, size, className, ...props }: IParagraphProps): JSX.Element => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.s]: size == "s",
                [styles.m]: size == "m",
                [styles.l]: size == "l",
            })}
        >
            {children}
        </p>
    )
}