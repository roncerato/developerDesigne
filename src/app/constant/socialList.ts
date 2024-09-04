
import GithubIcon from "public/svg/social/github.svg"
import LinkedInIcon from "public/svg/social/linkedin.svg"
import TwitterIcon from "public/svg/social/twitter.svg"

interface ISocialList{
    id: number,
    href: string,
    Img: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export const socialList: ISocialList[] = [
    {
        id: Math.round(Math.random()*50000),
        href: "github.com",
        Img: GithubIcon
    },
    {
        id: Math.round(Math.random()*50000),
        href: "twitter.com",
        Img: TwitterIcon
    },
    {
        id: Math.round(Math.random()*50000),
        href: "linkedin.com",
        Img: LinkedInIcon
    },
]