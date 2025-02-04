import React, { useState } from 'react';

 const RegistrationPage = () => {
  const [cnic, setCnic] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!cnic || !email || !name) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulate sending data to the backend
    console.log({ cnic, email, name });
    setIsSubmitted(true);
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
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">User Registration</h1>

        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-green-600 font-semibold text-lg">Registration Successful!</h2>
            <p className="mt-4">Check your email for your temporary password.</p>
          </div>
        ) : (
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">CNIC</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border rounded-lg"
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
                placeholder="Enter your CNIC"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-2 p-2 border rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                className="w-full mt-2 p-2 border rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 w-full"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegistrationPage;