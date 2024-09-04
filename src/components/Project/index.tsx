import { Heading } from "../Headings/Headings";
import { Paragraph } from "../Paragraph/Paragraph";
import Image, { StaticImageData } from "next/image";
import { Span } from "../Span/Span";
import Link from "next/link";
export default function ProjectItem({ img, name }: { img: StaticImageData, name: string }) {
    return (
        <li className="project-item">
            <div className="project-item-img-wrap">
                <Image src={img} alt={name} />
            </div>
            <div className="project-item-main">

                <Heading tag={"h3"}>
                    Project Tile goes here
                </Heading>
                <Paragraph size="m">
                    This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content
                </Paragraph>
                <Paragraph size="s">
                    Tech stack :<Span size={"xs"}>HTML , JavaScript, SASS, React</Span>
                </Paragraph>
                <div className="project-links">
                    <Link href="/">
                        <Span size="s">
                            Live Preview
                        </Span>
                    </Link>
                    <Link href="/">
                        <Span size="s">
                            View Code
                        </Span>
                    </Link>
                </div>
            </div>
        </li>
    )
}