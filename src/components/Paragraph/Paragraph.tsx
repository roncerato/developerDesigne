import { IParagraphProps } from "./Paragraph.props"
import styles from "./Paragraph.module.scss"
import cn from "classnames"
import { Poppins } from "next/font/google";

const poppins = Poppins({weight: ["400", "300"], subsets: ["latin"] })

export const Paragraph = ({ children, size, className, ...props }: IParagraphProps): JSX.Element => {
    return (
        <p
            className={cn(className, poppins.className, {
                [styles.s]: size == "s",
                [styles.m]: size == "m",
                [styles.l]: size == "l",
            })}
        >
            {children}
        </p>
    )
}