import { NextResponse } from "next/server";

type City = { id: number; name: string; state: string };

// Seed data (substitua por query ao seu banco quando preferir)
const CITIES: City[] = [
  { id: 1, name: "São Paulo", state: "SP" },
  { id: 2, name: "Rio de Janeiro", state: "RJ" },
  { id: 3, name: "Belo Horizonte", state: "MG" },
  { id: 4, name: "Curitiba", state: "PR" },
  { id: 5, name: "Porto Alegre", state: "RS" },
  { id: 6, name: "Caruaru", state: "PE" },
  { id: 7, name: "Caratinga", state: "MG" },
  { id: 8, name: "Cascavel", state: "PR" },
  { id: 9, name: "Cariacica", state: "ES" },
  { id: 10, name: "Campinas", state: "SP" },
  { id: 11, name: "Cabo Frio", state: "RJ" },
  { id: 12, name: "Campo Grande", state: "MS" },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").toLowerCase();
  const limit = Math.min(Number(searchParams.get("limit") || 20), 100);

  const results = q
    ? CITIES.filter(
        (c) =>
          c.name.toLowerCase().startsWith(q) ||
          c.name.toLowerCase().includes(q),
      )
    : CITIES;

  return NextResponse.json(results.slice(0, limit));
}
