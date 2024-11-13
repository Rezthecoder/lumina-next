import Link from "next/link";
import LogoImg from '@/public/logo.png'
export default function Header() {
    return (
        <header className="header">
            <div className="container container-sm header-flex">
                <Link href="/">
                    <img src={LogoImg.src} alt="logo"></img>
                </Link>

                <ul className="main-menu">
                    <li><Link href="/" className="current">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </header>
    )
}