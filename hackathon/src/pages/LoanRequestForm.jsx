import React, { useState } from 'react';

 const LoanRequestForm = () => {
  const [loanDetails, setLoanDetails] = useState({
    category: '',
    subcategory: '',
    amount: '',
  });
  const [guarantors, setGuarantors] = useState([
    { name: '', email: '', location: '', cnic: '' },
    { name: '', email: '', location: '', cnic: '' },
  ]);
  const [personalInfo, setPersonalInfo] = useState({
    address: '',
    phone: '',
    statement: '',
    salarySheet: null,
  });

  const handleLoanDetailsChange = (e) => {
    const { name, value } = e.target;
    setLoanDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleGuarantorChange = (index, field, value) => {
    const updatedGuarantors = guarantors.map((g, i) =>
      i === index ? { ...g, [field]: value } : g
    );
    setGuarantors(updatedGuarantors);
  };

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    setPersonalInfo((prev) => ({ ...prev, salarySheet: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate submission to backend
    console.log({ loanDetails, guarantors, personalInfo });
    alert('Loan request submitted successfully!');
  };

  return (
    <div
    style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5XaPknTWTxdBcdC3r0_9blSi_8n3rD_2Xg&s")`, // Leave this empty; replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
        
      
    
      }}
    
    
    
    className="bg-gray-100 min-h-screen p-6 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Loan Request Form</h1>
        <form onSubmit={handleSubmit}>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Loan Details</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={loanDetails.category}
              onChange={handleLoanDetailsChange}
              className="w-full mt-2 p-2 border rounded-lg"
              placeholder="Enter loan category"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Subcategory</label>
            <input
              type="text"
              name="subcategory"
              value={loanDetails.subcategory}
              onChange={handleLoanDetailsChange}
              className="w-full mt-2 p-2 border rounded-lg"
              placeholder="Enter loan subcategory"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Loan Amount</label>
            <input
              type="number"
              name="amount"
              value={loanDetails.amount}
              onChange={handleLoanDetailsChange}
              className="w-full mt-2 p-2 border rounded-lg"
              placeholder="Enter loan amount"
            />
          </div>

          <h2 className="text-lg font-semibold text-gray-700 mb-4">Guarantors</h2>
          {guarantors.map((guarantor, index) => (
            <div key={index} className="mb-4 border p-4 rounded-lg">
              <h3 className="text-gray-700 font-medium mb-2">Guarantor {index + 1}</h3>
              <div className="mb-2">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  value={guarantor.name}
                  onChange={(e) => handleGuarantorChange(index, 'name', e.target.value)}
                  className="w-full mt-2 p-2 border rounded-lg"
                  placeholder="Enter guarantor name"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={guarantor.email}
                  onChange={(e) => handleGuarantorChange(index, 'email', e.target.value)}
                  className="w-full mt-2 p-2 border rounded-lg"
                  placeholder="Enter guarantor email"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  value={guarantor.location}
                  onChange={(e) => handleGuarantorChange(index, 'location', e.target.value)}
                  className="w-full mt-2 p-2 border rounded-lg"
                  placeholder="Enter guarantor location"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">CNIC</label>
                <input
                  type="text"
                  value={guarantor.cnic}
                  onChange={(e) => handleGuarantorChange(index, 'cnic', e.target.value)}
                  className="w-full mt-2 p-2 border rounded-lg"
                  placeholder="Enter guarantor CNIC"
                />
              </div>
            </div>
          ))}

          <h2 className="text-lg font-semibold text-gray-700 mb-4">Personal Information</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={personalInfo.address}
              onChange={handlePersonalInfoChange}
              className="w-full mt-2 p-2 border rounded-lg"
              placeholder="Enter your address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={personalInfo.phone}
              onChange={handlePersonalInfoChange}
              className="w-full mt-2 p-2 border rounded-lg"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Statement</label>
            <textarea
              name="statement"
              value={personalInfo.statement}
              onChange={handlePersonalInfoChange}
              className="w-full mt-2 p-2 border rounded-lg"
              placeholder="Enter a statement (optional)"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Salary Sheet</label>
            <input
              type="file"
              onChange={handleFileUpload}
              className="w-full mt-2 p-2 border rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 w-full"
          >
            Submit Loan Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanRequestForm;