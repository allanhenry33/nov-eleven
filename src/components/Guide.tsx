{/* Previous imports remain the same */}

function Guide() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
      <div className="mb-6 p-4 bg-indigo-900 text-white rounded-xl">
        <h3 className="font-semibold mb-2">Need Professional Help?</h3>
        <p className="mb-2">
          Active Debt Relief can help you explore debt relief options that could potentially:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Lower your monthly payments</li>
          <li>Reduce your total debt</li>
          <li>Help you become debt-free faster</li>
        </ul>
        <a
          href="tel:1-800-871-6817"
          className="inline-block bg-white text-indigo-900 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
        >
          Call (800) 871-6817 for a Free Consultation
        </a>
      </div>

      {/* Rest of the existing guide content remains the same */}
    </div>
  );
}

export default Guide;