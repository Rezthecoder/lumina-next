import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok, faYoutube, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import LogoImg from "@/public/logo.png";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-flex">
                <img src={LogoImg.src} alt="logo" />
                <div>
                    <h4>Contact Us</h4>
                    <ul>
                        <li>(555) 555-5555</li>
                        <li>contact@lumina.test</li>
                        <li>10 Shinjuku, Tokyo</li>
                    </ul>
                </div>
                <div className="social">
                    <h4>Follow Us</h4>
                    <Link href="#"><FontAwesomeIcon icon={faFacebook} /></Link>
                    <Link href="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                    <Link href="#"><FontAwesomeIcon icon={faTiktok} /></Link>
                    <Link href="#"><FontAwesomeIcon icon={faYoutube} /></Link>
                    <Link href="#"><FontAwesomeIcon icon={faLinkedin} /></Link>
                    <Link href="#"><FontAwesomeIcon icon={faTwitter} /></Link>
                </div>
            </div>
        </footer>
    );
}
