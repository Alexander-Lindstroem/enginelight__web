import Link from "next/link"

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent py-4" >
            <nav className="flex justify-center items-center gap-10 sm:gap-10 md:gap-24 text-sm sm:text-base md:text-lg px-[20px] h-[44px]"
                style={{
                    color: "#CBCBCB",
                    fontFamily: "'Orbitron', sans-serif",
                    fontWeight: '500',
                    textShadow:
                        '-1px 2px 3px rgba(117, 32, 29, 0.9), 1px 2px 4px rgba(117, 32, 29, 0.9)'
                }}>
                <Link href="/">Home</Link>
                <Link href="/gameplay">Gameplay</Link>
                <Link href="/aboutus">About Us</Link>
            </nav>
        </header>
    )
}

export default Header
