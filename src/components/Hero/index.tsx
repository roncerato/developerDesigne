import { Heading } from "../Headings/Headings";
import Image from "next/image";
import avatar from "public/avatar.jpg"
export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-container container">
                <Heading tag={"h1"}>
                    Hi 👋,<br/>
                    My name is<br/>
                    <span>Pavan MG</span><br/>
                    I build things for web<br/>
                </Heading>
                <div className="hero-avatar-container">
                    <Image src={avatar} alt={"Pavan MG"} />
                </div>
            </div>
        </section>
    )
}