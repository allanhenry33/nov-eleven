{/* Previous imports remain the same */}

function App() {
  // Previous state and functions remain the same

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="bg-indigo-900 text-white py-2">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm text-center">
            Active Debt Relief is a licensed and bonded debt relief agency. Contact us for a free consultation.
          </p>
        </div>
      </div>

      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/favicon.svg" alt="Logo" className="w-8 h-8" />
            <h1 className="text-xl font-bold text-indigo-900">
              Debt Avalanche Calculator
            </h1>
          </div>
          <a
            href="tel:1-800-871-6817"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Call (800) 871-6817
          </a>
        </div>
      </header>

      {/* Rest of the existing component remains the same until the footer */}

      <footer className="bg-indigo-900 text-white mt-12">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Active Debt Relief</h3>
              <p className="text-indigo-200 mb-4">
                Licensed and bonded debt relief agency helping Americans become debt-free through ethical debt relief solutions.
              </p>
              <a
                href="tel:1-800-871-6817"
                className="text-white hover:text-indigo-200 font-medium"
              >
                Call (800) 871-6817
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Legal Information</h3>
              <p className="text-indigo-200 text-sm">
                This calculator is provided as a free educational tool. Results may vary. 
                Active Debt Relief is a licensed debt relief agency. We help people file 
                for debt relief under debt settlement laws. This is not a commitment to 
                lend or provide debt relief services.
              </p>
            </div>
          </div>
          <div className="border-t border-indigo-800 pt-8 text-center text-indigo-200">
            <p>© {new Date().getFullYear()} Active Debt Relief. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;