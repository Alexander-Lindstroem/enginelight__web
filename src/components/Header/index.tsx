import Link from "next/link"

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-linear-to-b from-black to-transparent from-15% pb-12 py-4" >
            <nav className="flex justify-center items-center gap-10 sm:gap-24 text-elbodys sm:text-elbodym md:text-elbodyl px-[20px] h-[44px] text-elwhite font-elmain font-medium text-shadow-soft">
                <Link href="/">Home</Link>
                <Link href="/gameplay">Gameplay</Link>
                <Link href="/aboutus">About Us</Link>
            </nav>
        </header>
    )
}

export default Header

