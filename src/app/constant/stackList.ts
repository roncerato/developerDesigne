import Html from "public/svg/stack/html.svg"
import Bootstrap from "public/svg/stack/bootstrap.svg"
import Css from "public/svg/stack/css.svg"
import Vector from "public/svg/stack/Vector.svg"
import Git from "public/svg/stack/git.svg"
import Github from "public/svg/stack/github.svg"
import Greensocks from "public/svg/stack/greensock.svg"
import Js from "public/svg/stack/js.svg"
import ReactIcon from "public/svg/stack/react.svg"
import Sass from "public/svg/stack/sass.svg"
import TailwindIcon from "public/svg/stack/tailwind.svg"
import BootstrapIcon from "public/svg/stack/bootstrap.svg"
import VSCode from "public/svg/stack/vscode.svg"
import { SVGProps } from "react"

interface IStackList{
    name: string
    Icon: React.FunctionComponent<SVGProps<SVGSVGElement>>

}

export const stackList: IStackList[] = [
    {
        name: "HTML",
        Icon: Html
    },
    {
        name: "CSS",
        Icon: Css
    },
    {
        name: "JS",
        Icon: Js
    },
    {
        name: "React",
        Icon: ReactIcon
    },
    {
        name: "Vector",
        Icon: Vector
    },
    {
        name: "Bootstrap",
        Icon: BootstrapIcon
    },
    {
        name: "Tailwind",
        Icon: TailwindIcon
    },
    {
        name: "SASS",
        Icon: Sass
    },
    {
        name: "Git",
        Icon: Git
    },
    {
        name: "Greensocks",
        Icon: Greensocks
    },
    {
        name: "VSCode",
        Icon: VSCode
    },
    {
        name: "Github",
        Icon: Github
    },
]