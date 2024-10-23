import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="bg-gray-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
   <Link className="text-white text-2xl font-bold" href="/">Stylowatch</Link>   
   <ul className="flex space-x-4">
    <li><Link className="text-gray-300 hover:text-white" href="/about">About</Link></li>
    <li><Link className="text-gray-300 hover:text-white" href="/collection">Collection</Link></li>
    <li><Link className="text-gray-300 hover:text-white" href="/Contact">Contact</Link></li>

    </ul>          
         </div>
        </nav>
    );

}