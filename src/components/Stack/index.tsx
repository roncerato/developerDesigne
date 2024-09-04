import { Heading } from "../Headings/Headings";
import { Paragraph } from "../Paragraph/Paragraph";
import StackList from "../StackList";

export default function StackSection() {
    return (
        <section className="stack-section">
            <div className="stack-container container">
                <Heading tag={"h2"}>
                    My Tech Stack
                </Heading>
                <Paragraph size={"l"}>
                    Technologies I&apos;ve been working with recently
                </Paragraph>
                <StackList/>
            </div>
        </section>
    )
}