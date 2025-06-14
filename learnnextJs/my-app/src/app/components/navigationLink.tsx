import Link from "next/link"

export const Navigatio =() =>{
    return(
        
        <nav className="bg-red-800 flex gap-3">
            <Link href='/about'>About</Link>
            <Link href='/home'>Home</Link>
        </nav>
    )
}