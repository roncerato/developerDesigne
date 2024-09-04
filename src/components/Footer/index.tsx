import Link from "next/link"
import LogoFilled from "public/svg/logo-filled.svg"
import { Span } from "../Span/Span"
import Social from "../Social"
import Navigation from "../Navigation"
import { Paragraph } from "../Paragraph/Paragraph"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <div className="footer-contact">
                    <LogoFilled width={97} height={59} />
                    <a href="tel:+911234509876">
                        <Span size={"m"}>
                            +91 12345 09876
                        </Span>
                    </a>
                    <a href="mailto:info@example.com">
                        <Span size={"m"}>
                            info@example.com
                        </Span>
                    </a>
                    <Social color={"#42446E"} />
                </div>
                <hr style={{ height: "2px", background: "#666" }} />
                <div className="footer-nav-copy">
                    <Navigation size="m" />
                    <Paragraph size={"m"}>
                        Designed and built by <span>Pavan MG </span>with <span>Love</span> & <span>Coffe</span>
                    </Paragraph>
                </div>
            </div>
        </footer>
    )
}