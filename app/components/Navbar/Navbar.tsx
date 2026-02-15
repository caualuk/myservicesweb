import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-gray-900">
            MyServices
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-12 text-sm text-gray-600">
          <Link href="#" className="hover:text-gray-900 transition">
            Início
          </Link>
          <Link href="#" className="hover:text-gray-900 transition">
            Serviços
          </Link>
          <Link href="#" className="hover:text-gray-900 transition">
            Contato
          </Link>
        </div>

        {/* Botões */}
        <div className="flex items-center gap-4">
          <button className="cursor-pointer rounded-md bg-black px-4 py-2 text-sm font-medium border-1 text-white transition">
            Entrar
          </button>
          <Link href="/register">
            <button className="cursor-pointer rounded-md bg-white px-4 py-2 text-sm font-medium border border-black text-black transition">
              Registre-se
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
