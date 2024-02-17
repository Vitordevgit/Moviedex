"use client";

import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <header className="flex items-center justify-between px-4 py-3 text-primary">
      <Link href="/">
        <h1 className="text-2xl font-bold">
          Movie<span className="text-2xl font-bold text-secondary">DEX</span>
        </h1>
      </Link>
      <nav className="flex flex-row">
        <Link href="/movies">
          <p className="mx-2">Filmes</p>
        </Link>
        <Link href="/minhacolecao">
          <p className="mx-2">Minha Coleção</p>
        </Link>
        <Link href="/listadedesejos">
          <p className="mx-2">Lista de Desejos</p>
        </Link>
      </nav>
      {/* componente de procura de filmes */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 rounded-full border text-black border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
      </div>
    </header>
  );
};

export default Header;
