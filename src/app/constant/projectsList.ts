import { StaticImageData } from "next/image"
import Img1 from "public/1.png"
import Img2 from "public/2.png"
import Img3 from "public/3.png"
import Img4 from "public/4.png"
import Img5 from "public/5.png"
import Img6 from "public/6.png"


interface IProjectsList{
    img: StaticImageData
    name: string
}

export const projectsList: IProjectsList[] = [
    {
        img: Img1,
        name: "img1"
    },
    {
        img: Img2,
        name: "img2"
    },
    {
        img: Img3,
        name: "img3"
    },
    {
        img: Img4,
        name: "img4"
    },
    {
        img: Img5,
        name: "img5"
    },
    {
        img: Img6,
        name: "img6"
    },
]