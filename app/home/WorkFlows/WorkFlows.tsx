import FunctionalityCards from "./FunctionalityCards/FunctionalityCards";

export default function WorkFlowsSection() {
  return (
    <section className="w-[100%] h-[400px] flex flex-col justify-center gap-7">
      <div className="flex flex-col text-center justify-center p-10 gap-2">
        <span className="font-bold text-[32px]">Pexo spend workflows</span>
        <div className="break-words text-[15px] font-medium max-w-[600px] mx-auto text-gray-600">
          Real-time tracking of budgets across all spend, with approval and
          accounting tools tailcred to your business and spend specific flows
        </div>
      </div>
      <FunctionalityCards/>
    </section>
  );
}
