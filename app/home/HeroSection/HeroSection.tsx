export default function HeroSection() {
  return (
    <section className="w-[100%] h-[350px] flex flex-col justify-center gap-4 text-center">
      <span className="text-4xl font-bold ">Build smarter workflows with AI that understands context</span>

      <div className="break-words text-[15px] font-medium max-w-[600px] mx-auto text-gray-600">
        An AI plataform that helps teams automate thinking-heavy work - from
        writing and analysis to decision support and real-time assistance.
      </div>

      <div className="flex gap-5 place-items-center justify-center mt-4">
        <button className="cursor-pointer rounded-md bg-black px-7 py-2 text-sm font-medium border border-black text-white transition">Request a demo</button>
        <button className="cursor-pointer rounded-md bg-white px-7 py-2 text-sm font-medium border border-gray-400 text-black transition">Request a demo</button>
      </div>
    </section>
  );
}
