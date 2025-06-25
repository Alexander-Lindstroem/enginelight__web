export default function Footer() {
    return (
        <footer className=" border-t-amber-950 border-t-2 bg-black bg-opacity-90 text-gray-300 py-8 px-2 text-center text-elbodym">
            <div className="max-w-3xl mx-auto">
                <p className="font-elmain text-elbodys"> &copy; {new Date().getFullYear()}  EngineLight. All rights reserved.</p>
                <p className=" font-elmain text-elbodys text-gray-400 mt-1">
                    A game by FutureGames
                </p>
                <a
                    href="https://futuregames.itch.io/enginelight"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-elmain text-blue-200 text-elbodys underline hover:text-blue-300 mt-2 block break-words"
                >
                    futuregames.itch.io/enginelight
                </a>
            </div>
        </footer>
    );
}
