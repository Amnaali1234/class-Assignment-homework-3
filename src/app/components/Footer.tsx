import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return(
        <footer className="bg-gray-900 py-8 text-white">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 StyloWatch. All Rights Reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <Link href="/"><Image src="/download-1.png" alt="Fcaebook" width= {500} height= {300} className="w-6"/></Link>
                    <Link href="/"><Image src="/download-2.jpeg" alt="Instagram" width= {500} height= {300} className="w-6"/></Link>
                    <Link href="/"><Image src="/download-3.png" alt="Twitter" width= {500} height= {300} className="w-6"/></Link>

                </div>
             </div>
        </footer>
    );
}