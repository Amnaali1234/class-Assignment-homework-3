import Link from "next/link";
import Image from "next/image"; 
export default function Collection() {
    return (
      <section id="collection" className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl text-black font-bold mb-8">Our Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-4 shadow-lg">
              <Image src="/image-1.webp" alt="Watch 1" width= {500} height={500} className="mx-auto mb-4" />
              <h3 className="text-2xl text-black font-semibold">Classic Copper</h3>
              <p className="text-gray-700">$250.00</p>
            </div>
            <div className="bg-white p-4 shadow-lg">
              <Image src="/image-2.webp" alt="Watch 2" width= {500} height= {500} className="mx-auto mb-4" />
              <h3 className="text-2xl text-black font-semibold">Modern Silver</h3>
              <p className="text-gray-700">$300.00</p>
            </div>
            <div className="bg-white p-4 shadow-lg">
              <Image src="/image-3.webp" alt="Watch 3" width= {500} height= {500} className="mx-auto mb-4" />
              <h3 className="text-2xl text-black font-semibold">Gold Edition</h3>
              <p className="text-gray-700">$450.00</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  