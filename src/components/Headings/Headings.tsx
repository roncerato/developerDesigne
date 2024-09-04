import { IHeadingProps } from "./Heading.props"
import styles from "./Heading.module.scss"
import { Poppins } from "next/font/google";
import cn from "classnames"

const poppins = Poppins({weight: ["500", "700"], subsets: ["latin"] })

export const Heading = ({ tag, children }: IHeadingProps): JSX.Element => {
    switch (tag) {
        case "h1":
            return <h1 className={cn([styles.h1, poppins.className])}>{children}</h1>
        case "h2":
            return <h2 className={cn([styles.h2, poppins.className])}>{children}</h2>
        case "h3":
            return <h3 className={cn([styles.h3, poppins.className])}>{children}</h3>
        default:
            const a: never = tag
            return a
    }
}