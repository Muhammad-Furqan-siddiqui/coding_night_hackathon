import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [filter, setFilter] = useState({ city: '', country: '' });
  const [newApplication, setNewApplication] = useState({ name: '', city: '', country: '', status: '' });

  // Fetch all applications             http://localhost:8080/api/applications
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(' http://localhost:8080/api/applications');
        console.log('Fetched Applications:', response); // Log full response here
        if (Array.isArray(response.data)) {
          setApplications(response.data);
          setFilteredApplications(response.data);
        } else {
          console.error('API did not return an array');
        }
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };
    fetchApplications();
  }, []);

  // Update application status
  const updateApplicationStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:8080/api/applications/${id}`, { status });
      alert('Application status updated successfully');
      refreshApplications();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  // Add token number to an application
  const addTokenNumber = async (id, token) => {
    try {
      await axios.post(`http://localhost:8080/api/applications/${id}/token`, { token });
      alert('Token number added successfully');
    } catch (error) {
      console.error('Error adding token number:', error);
    }
  };

  // Add a new application
  const addApplication = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/applications', newApplication);
      alert('Application added successfully');
      setNewApplication({ name: '', city: '', country: '', status: '' });
      refreshApplications();
    } catch (error) {
      console.error('Error adding application:', error);
    }
  };

  // Refresh applications list
  const refreshApplications = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/applications');
      if (Array.isArray(response.data)) {
        setApplications(response.data);
        setFilteredApplications(response.data);
      }
    } catch (error) {
      console.error('Error refreshing applications:', error);
    }
  };

  // Filter applications by city and country
  const filterApplications = () => {
    const filtered = applications.filter((app) => {
      const matchesCity = filter.city ? app.city === filter.city : true;
      const matchesCountry = filter.country ? app.country === filter.country : true;
      return matchesCity && matchesCountry;
    });
    setFilteredApplications(filtered);
  };

  return (
    <div
    
    style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5XaPknTWTxdBcdC3r0_9blSi_8n3rD_2Xg&s")`, // Leave this empty; replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} 
    className="bg-gray-100 min-h-screen p-6">
      {/* Navbar */}
      <div className="bg-blue-600 text-white p-4 mb-6">
        <div className="container mx-auto flex justify-between">
          <div className="font-bold text-xl">Admin Dashboard</div>
          <div className="flex gap-4">
            <button className="hover:bg-blue-700 px-4 py-2 rounded"> <Link to="/LandingPage">LandingPage</Link></button>
            <button className="hover:bg-blue-700 px-4 py-2 rounded"><Link to="/UserDashboard">UserDashboard</Link></button>
            <button className="hover:bg-blue-700 px-4 py-2 rounded"> <Link to="/Users">Users</Link></button>
            <button className="hover:bg-blue-700 px-4 py-2 rounded"> <Link to="/LoanRequestForm">LoanRequestForm</Link></button>
            <button className="hover:bg-blue-700 px-4 py-2 rounded"> <Link to="/RegistrationPage">RegistrationPage</Link></button>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Applications</h1>

        {/* Add New Application */}
        <div className="mb-6 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Add New Application</h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name"
              value={newApplication.name}
              onChange={(e) => setNewApplication({ ...newApplication, name: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="City"
              value={newApplication.city}
              onChange={(e) => setNewApplication({ ...newApplication, city: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Country"
              value={newApplication.country}
              onChange={(e) => setNewApplication({ ...newApplication, country: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Status"
              value={newApplication.status}
              onChange={(e) => setNewApplication({ ...newApplication, status: e.target.value })}
              className="p-2 border border-gray-300 rounded"
            />
            <button
              onClick={addApplication}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Add Application
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex gap-4">
          <input
            type="text"
            placeholder="Filter by City"
            value={filter.city}
            onChange={(e) => setFilter({ ...filter, city: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Filter by Country"
            value={filter.country}
            onChange={(e) => setFilter({ ...filter, country: e.target.value })}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            onClick={filterApplications}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Apply Filters
          </button>
        </div>

        {/* Applications List */}
        <div className="grid grid-cols-1 gap-6">
          {Array.isArray(filteredApplications) && filteredApplications.length > 0 ? (
            filteredApplications.map((app) => (
              <div key={app.id} className="bg-white p-6 rounded-lg shadow border border-gray-200">
                <h2 className="text-xl font-bold mb-2">{app.name}</h2>
                <p><strong>City:</strong> {app.city}</p>
                <p><strong>Country:</strong> {app.country}</p>
                <p><strong>Status:</strong> {app.status}</p>

                {/* Update Status */}
                <button
                  onClick={() => updateApplicationStatus(app.id, 'approved')}
                  className="bg-green-600 text-white px-4 py-2 rounded mt-4 mr-2 hover:bg-green-700"
                >
                  Approve
                </button>
                <button
                  onClick={() => updateApplicationStatus(app.id, 'rejected')}
                  className="bg-red-600 text-white px-4 py-2 rounded mt-4 hover:bg-red-700"
                >
                  Reject
                </button>

                {/* Add Token Number */}
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Enter Token Number"
                    className="p-2 border border-gray-300 rounded mr-2"
                  />
                  <button
                    onClick={() => addTokenNumber(app.id, 'TOKEN123')}
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                  >
                    Add Token
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No applications found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
