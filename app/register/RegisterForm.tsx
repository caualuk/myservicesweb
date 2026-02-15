"use client";

import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-5">
      <div>
        <label className="text-sm text-gray-600">Nome:</label>
        <input
          type="text"
          placeholder="Insira seu nome"
          className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">Email:</label>
        <input
          type="email"
          placeholder="nome@usuario.com.br"
          className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
      </div>

      <div>
        <label className="text-sm text-gray-600">Senha:</label>
        <div className="relative mt-1">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="nome@123"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
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
          className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
        />
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
