
export default function Navbar() {

    return (
        <header className="w-[85%] mx-auto">
            <div className="w-full h-[9.4rem] bg-main_bg bg-cover bg-center bg-no-repeat">
                <h1 className="text-5xl font-serif pt-2 text-white font-extrabold ml-20">Hónapok</h1>
            </div>
            <nav className="w-full p-1 px-4 flex items-center gap-4 bg-white">
                <a href="#osz" className="text-xl font-bold uppercase text-orange-600 hover:text-orange-100 hover:bg-orange-500 p-3">Ősz</a>
                <a href="#tel" className="text-xl font-bold uppercase text-orange-600 hover:text-orange-100 hover:bg-orange-500 p-3">Tél</a>
                <a href="#tavasz" className="text-xl font-bold uppercase text-orange-600 hover:text-orange-100 hover:bg-orange-500 p-3">Tavasz</a>
                <a href="#nyar" className="text-xl font-bold uppercase text-orange-600 hover:text-orange-100 hover:bg-orange-500 p-3">Nyár</a>
            </nav>
        </header>
    )
}