import React from 'react';
import { Link } from 'react-router-dom';
 const LandingPage = () => {
  return (
    <div
    style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5XaPknTWTxdBcdC3r0_9blSi_8n3rD_2Xg&s")`, // Leave this empty; replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        
        
      
    
      }}
    
    className=" min-h-screen p-6   ">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Saylani Welfare Qarze Hasana Program</h1>
        <p className="text-gray-600 mt-2">Explore loan categories and calculate your estimated loan.</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Loan Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Wedding Loans", subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"] },
            { name: "Home Construction Loans", subcategories: ["Structure", "Finishing", "Loan"] },
            { name: "Business Startup Loans", subcategories: ["Buy Stall", "Advance Rent", "Shop Assets", "Shop Machinery"] },
            { name: "Education Loans", subcategories: ["University Fees", "Child Fees Loan"] },
          ].map((category, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <h3 className="text-xl font-medium text-gray-800">{category.name}</h3>
              <ul className="text-gray-600 mt-2">
                {category.subcategories.map((sub, i) => (
                  <li key={i}>- {sub}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Loan Calculator</h2>
        <p className="text-gray-600 mb-6">Select a category, input your details, and calculate your estimated loan breakdown.</p>
        <Link to="/calculator" className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
          Go to Calculator
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;