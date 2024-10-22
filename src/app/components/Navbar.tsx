export default function Navbar() {
    return(
        <nav className="bg-gray-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
   <a className="text-white text-2xl font-bold" href="#">Stylowatch</a>   
   <ul className="flex space-x-4">
    <li><a className="text-gray-300 hover:text-white" href="#about">About</a></li>
    <li><a className="text-gray-300 hover:text-white" href="#collection">Collection</a></li>
    <li><a className="text-gray-300 hover:text-white" href="#Contact">Contact</a></li>

    </ul>          
         </div>
        </nav>
    );

}