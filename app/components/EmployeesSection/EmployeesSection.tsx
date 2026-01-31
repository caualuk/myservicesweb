export default function EmployeesSection() {
  return (
    <section className="w-full py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Texto */}
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Employee cards with <br /> complete spend control.
          </h2>

          <p className="mt-4 text-gray-500">
            Issue cards with fully adjustable limits to any employee in just a
            click. Custom approval policies guarantee real-time oversight.
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:cursor-pointer hover:bg-blue-700 transition">
            Learn more →
          </button>
        </div>

        {/* Card maior */}
        <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Employee cards lists
          </h3>

          <div className="space-y-6">
            {[
              {
                name: "Foysal khan",
                role: "Account Holder",
                value: "$1,000 per month",
              },
              {
                name: "Hamid Ali",
                role: "Account Holder",
                value: "$250 one-off purchase",
              },
              {
                name: "Maskur Alom",
                role: "Account Holder",
                value: "$1,000 per week",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-3 rounded-lg transition"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-600">
                      {item.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </span>
                  </div>

                  <div>
                    <p className="text-base font-semibold text-gray-900">
                      {item.name}
                    </p>
                    <span className="text-sm text-gray-500">
                      {item.role}
                    </span>
                  </div>
                </div>

                <span className="text-base font-semibold text-gray-900">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}