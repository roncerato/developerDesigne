import { projectsList } from "@/app/constant/projectsList";
import { Heading } from "../Headings/Headings";
import { Paragraph } from "../Paragraph/Paragraph";
import Project from "../Project";

export default function ProjectsSection() {
    return (
        <section className="projects-section">
            <div className="projects-container container">
                <Heading tag={"h2"}>
                    Projects
                </Heading>
                <Paragraph size={"l"}>
                    Things I&apos;ve built so far
                </Paragraph>
                <ul className="projects-list">
                    {projectsList.map((item)=>(
                        <Project img={item.img} name={item.name} key={item.name}/>
                    ))}
                </ul>
            </div>
        </section>
    )
}