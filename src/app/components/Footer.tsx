export default function Footer() {
    return(
        <footer className="bg-gray-900 py-8 text-white">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 StyloWatch. All Rights Reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="/"><img src="/download-1.png" alt="Fcaebook" className="w-6"/></a>
                    <a href="/"><img src="/download-2.jpeg" alt="Instagram" className="w-6"/></a>
                    <a href="/"><img src="/download-3.png" alt="Twitter" className="w-6"/></a>

                </div>
             </div>
        </footer>
    );
}