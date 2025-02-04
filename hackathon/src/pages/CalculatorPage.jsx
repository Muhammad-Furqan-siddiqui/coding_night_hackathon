import React, { useState } from 'react';

 const CalculatorPage = () => {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [loanPeriod, setLoanPeriod] = useState(0);
  const [initialDeposit, setInitialDeposit] = useState(0);
  const [estimatedLoan, setEstimatedLoan] = useState(null);

  const loanCategories = {
    'Wedding Loans': {
      subcategories: ['Valima', 'Furniture', 'Valima Food', 'Jahez'],
      maxLoan: 500000,
      period: 3,
    },
    'Home Construction Loans': {
      subcategories: ['Structure', 'Finishing', 'Loan'],
      maxLoan: 1000000,
      period: 5,
    },
    'Business Startup Loans': {
      subcategories: ['Buy Stall', 'Advance Rent', 'Shop Assets', 'Shop Machinery'],
      maxLoan: 1000000,
      period: 5,
    },
    'Education Loans': {
      subcategories: ['University Fees', 'Child Fees Loan'],
      maxLoan: 'Based on requirement',
      period: 4,
    },
  };

  const handleCalculate = () => {
    if (!category || !subcategory || !loanPeriod || !initialDeposit) {
      alert('Please fill in all fields.');
      return;
    }

    const maxLoan = loanCategories[category].maxLoan;
    const loanAmount = maxLoan !== 'Based on requirement' ? maxLoan - initialDeposit : 'Varies';

    setEstimatedLoan(loanAmount);
  };

  return (
    <div   
    style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5XaPknTWTxdBcdC3r0_9blSi_8n3rD_2Xg&s")`, // Leave this empty; replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} 
    
    className="bg-gray-100 min-h-screen p-6  ">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Loan Calculator</h1>
        <p className="text-gray-600 mt-2">Calculate your estimated loan based on the selected category and inputs.</p>
      </header>

      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Loan Category</label>
          <select
            className="w-full mt-2 p-2 border rounded-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            {Object.keys(loanCategories).map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {category && (
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Subcategory</label>
            <select
              className="w-full mt-2 p-2 border rounded-lg"
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
            >
              <option value="">Select a subcategory</option>
              {loanCategories[category].subcategories.map((sub, index) => (
                <option key={index} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Loan Period (years)</label>
          <input
            type="number"
            className="w-full mt-2 p-2 border rounded-lg"
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(e.target.value)}
            placeholder="Enter loan period"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Initial Deposit (PKR)</label>
          <input
            type="number"
            className="w-full mt-2 p-2 border rounded-lg"
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(e.target.value)}
            placeholder="Enter initial deposit"
          />
        </div>

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 w-full"
          onClick={handleCalculate}
        >
          Calculate Loan
        </button>

        {estimatedLoan !== null && (
          <div className="mt-6 bg-green-100 p-4 rounded-lg">
            <h2 className="text-xl font-bold text-green-700">Estimated Loan Amount:</h2>
            <p className="text-green-800 mt-2">{estimatedLoan === 'Varies' ? 'Based on requirements' : `PKR ${estimatedLoan}`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculatorPage;