import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const [applications, setApplications] = useState([]); // All applications
  const [filteredApplications, setFilteredApplications] = useState([]); // Filtered applications
  const [filter, setFilter] = useState({ loanType: "", status: "" }); // Filter criteria

  // Mock data to simulate applications
  useEffect(() => {
    const fetchApplications = async () => {
      const mockData = [
        { id: 1, loanType: "Business Loan", status: "Approved" },
        { id: 2, loanType: "Education Loan", status: "Pending" },
        { id: 3, loanType: "Wedding Loan", status: "Rejected" },
        { id: 4, loanType: "Home Construction Loan", status: "Approved" },
      ];
      setApplications(mockData);
      setFilteredApplications(mockData); // Initially show all data
    };

    fetchApplications();
  }, []);

  // Filter applications based on loan type and status
  const filterApplications = () => {
    const filtered = applications.filter((app) => {
      const matchesLoanType = filter.loanType
        ? app.loanType.toLowerCase().includes(filter.loanType.toLowerCase())
        : true;
      const matchesStatus = filter.status
        ? app.status.toLowerCase() === filter.status.toLowerCase()
        : true;
      return matchesLoanType && matchesStatus;
    });

    setFilteredApplications(filtered);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6"      
    style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5XaPknTWTxdBcdC3r0_9blSi_8n3rD_2Xg&s")`, // Leave this empty; replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          User Dashboard
        </h1>

        {/* Filter Section */}
        <div className="mb-6 flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Filter by Loan Type"
            value={filter.loanType}
            onChange={(e) => setFilter({ ...filter, loanType: e.target.value })}
            className="p-2 border border-gray-300 rounded w-full md:w-1/3"
          />
          <select
            value={filter.status}
            onChange={(e) => setFilter({ ...filter, status: e.target.value })}
            className="p-2 border border-gray-300 rounded w-full md:w-1/3"
          >
            <option value="">Filter by Status</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
          <button
            onClick={filterApplications}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Apply Filters
          </button>
        </div>

        {/* Render Filtered Applications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {filteredApplications.length > 0 ? (
            filteredApplications.map((app) => (
              <div
                key={app.id}
                className="block bg-white text-gray-800 rounded-lg shadow p-6"
              >
                <h2 className="text-xl font-semibold mb-2">
                  {app.loanType}
                </h2>
                <p>
                  <strong>Status:</strong> {app.status}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No applications found</p>
          )}
        </div>

        {/* Dashboard Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/loan-request"
            className="block bg-blue-600 text-white rounded-lg shadow p-6 hover:bg-blue-700"
          >
            <h2 className="text-xl font-semibold mb-2">Request a Loan</h2>
            <p>Submit a new loan application and provide all required details.</p>
          </Link>

          <Link
            to="/loan-history"
            className="block bg-green-600 text-white rounded-lg shadow p-6 hover:bg-green-700"
          >
            <h2 className="text-xl font-semibold mb-2">Loan History</h2>
            <p>View your previous loan applications and their statuses.</p>
          </Link>

          <Link
            to="/profile"
            className="block bg-purple-600 text-white rounded-lg shadow p-6 hover:bg-purple-700"
          >
            <h2 className="text-xl font-semibold mb-2">Profile</h2>
            <p>Update your personal information and account details.</p>
          </Link>

          <Link
            to="/guarantors"
            className="block bg-yellow-600 text-white rounded-lg shadow p-6 hover:bg-yellow-700"
          >
            <h2 className="text-xl font-semibold mb-2">Guarantors</h2>
            <p>Manage guarantor details associated with your loan applications.</p>
          </Link>

          <Link
            to="/appointments"
            className="block bg-red-600 text-white rounded-lg shadow p-6 hover:bg-red-700"
          >
            <h2 className="text-xl font-semibold mb-2">Appointments</h2>
            <p>View and manage your appointment schedule with the organization.</p>
          </Link>

          <Link
            to="/slip-download"
            className="block bg-indigo-600 text-white rounded-lg shadow p-6 hover:bg-indigo-700"
          >
            <h2 className="text-xl font-semibold mb-2">Download Slip</h2>
            <p>
              Download your application slip with token and appointment details.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
