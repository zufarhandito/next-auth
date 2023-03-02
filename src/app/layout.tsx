import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <nav className="flex px-44 place-items-center justify-between bg-red-300 p-3">
          <div>
            <p className="text-blue-500 font-black text-2xl ">anjay.</p>
          </div>
          <div className="">
            <ul className="flex gap-12 place-items-center">
              <li className="hover:text-blue-700">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-blue-700">
                <Link href="/services">Layanan</Link>
              </li>
              <li className="hover:text-blue-700">
                <Link href="/profile">Profil</Link>
              </li>
              <li className="hover:text-blue-700">
                <Link href="/help">Panduan</Link>
              </li>
              <li className="hover:text-blue-700">
                <Link href="/gallery">Galeri</Link>
              </li>
              <li>
                <button className="bg-blue-500 py-2 px-6 rounded text-white">Masuk</button>
              </li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
