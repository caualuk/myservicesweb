"use client";

import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import FilterTab from "./FilterTab";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [query, setQuery] = useState("");
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setCities([]);
      return;
    }

    const delay = setTimeout(async () => {
      setLoading(true);

      try {
        const res = await fetch(
          `http://localhost:8000/cities/search?q=${query}`,
        );

        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 300); // debounce

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <form className="space-y-3">
      <div>
        <label className="text-sm text-gray-600">Nome:</label>
        <input
          type="text"
          placeholder="Insira seu nome"
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">Email:</label>
        <input
          type="email"
          placeholder="nome@usuario.com.br"
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>

      <div className="relative">
        <label className="text-sm text-gray-600">Cidade:</label>

        <input
          type="text"
          placeholder="Digite sua cidade"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />

        {/* Dropdown bonito */}
        {cities.length > 0 && (
          <ul
            className="
        absolute
        w-full
        bg-white
        border border-gray-300
        rounded-lg
        mt-1
        shadow-lg
        max-h-52
        overflow-y-auto
        z-50
      "
          >
            {cities.map((city: any) => (
              <li
                key={city.id}
                onClick={() => {
                  setQuery(`${city.name} - ${city.state}`);
                  setCities([]);
                }}
                className="
            px-3 py-2
            cursor-pointer
            hover:bg-indigo-50
            transition
          "
              >
                {city.name} - {city.state}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <label className="text-sm text-gray-600">Senha:</label>
        <div className="relative mt-1">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="nome@123"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          />
          <button
            type="button"
            tabIndex={-1}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => setShowPassword(!showPassword)}
            className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                    hover:text-gray-700
                    bg-transparent
                    p-0
                    outline-none
                    focus:outline-none
                    focus-visible:outline-none
                    focus:ring-0
                    focus-visible:ring-0
                    active:outline-none
                    active:ring-0
                "
          >
            {showPassword ? <FaEyeSlash size={18} /> : <FaRegEye size={18} />}
          </button>
        </div>
      </div>

      <div>
        <label className="text-sm text-gray-600">Confirme sua senha:</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="nome@123"
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>

      <div className="mb-6">
        <FilterTab />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white py-3 rounded-lg font-medium"
      >
        Registrar
      </button>
    </form>
  );
}
