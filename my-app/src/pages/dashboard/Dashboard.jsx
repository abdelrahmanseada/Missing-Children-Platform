import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [recentCases, setRecentCases] = useState([
    {
      id: 1,
      name: 'John Doe',
      age: 12,
      lastSeen: '2024-03-15',
      location: 'New York, NY',
      status: 'active',
      image: 'https://via.placeholder.com/150',
    },
    // Add more mock cases as needed
  ]);

  const [statistics, setStatistics] = useState({
    totalCases: 150,
    activeCases: 45,
    resolvedCases: 105,
    matchesFound: 12,
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-description">
          Welcome back! Here's an overview of your cases and recent activity.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card bg-primary-50">
          <div className="card-body">
            <h3 className="text-lg font-medium text-primary-900">Total Cases</h3>
            <p className="text-3xl font-bold text-primary-600">{statistics.totalCases}</p>
          </div>
        </div>
        <div className="card bg-danger-50">
          <div className="card-body">
            <h3 className="text-lg font-medium text-danger-900">Active Cases</h3>
            <p className="text-3xl font-bold text-danger-600">{statistics.activeCases}</p>
          </div>
        </div>
        <div className="card bg-success-50">
          <div className="card-body">
            <h3 className="text-lg font-medium text-success-900">Resolved Cases</h3>
            <p className="text-3xl font-bold text-success-600">{statistics.resolvedCases}</p>
          </div>
        </div>
        <div className="card bg-secondary-50">
          <div className="card-body">
            <h3 className="text-lg font-medium text-secondary-900">Matches Found</h3>
            <p className="text-3xl font-bold text-secondary-600">{statistics.matchesFound}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Cases */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="card-header">
              <h2 className="section-title">Recent Cases</h2>
              <Link to="/search" className="btn-primary">
                View All
              </Link>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentCases.map((case_) => (
                  <div key={case_.id} className="card">
                    <img
                      src={case_.image}
                      alt={case_.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="card-body">
                      <h3 className="text-lg font-medium text-gray-900">{case_.name}</h3>
                      <p className="text-sm text-gray-500">Age: {case_.age}</p>
                      <p className="text-sm text-gray-500">Last Seen: {case_.lastSeen}</p>
                      <p className="text-sm text-gray-500">Location: {case_.location}</p>
                      <div className="mt-4">
                        <span className={`badge-${case_.status === 'active' ? 'danger' : 'success'}`}>
                          {case_.status}
                        </span>
                      </div>
                      <div className="mt-4">
                        <Link
                          to={`/cases/${case_.id}`}
                          className="btn-primary w-full text-center"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-1">
          <div className="card">
            <div className="card-header">
              <h2 className="section-title">Quick Actions</h2>
            </div>
            <div className="card-body">
              <div className="space-y-4">
                <Link to="/upload" className="btn-primary w-full text-center">
                  Upload New Photo
                </Link>
                <Link to="/search" className="btn-secondary w-full text-center">
                  Search Cases
                </Link>
                <Link to="/community" className="btn-secondary w-full text-center">
                  Community Forum
                </Link>
                <Link to="/resources" className="btn-secondary w-full text-center">
                  Resources
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card mt-8">
            <div className="card-header">
              <h2 className="section-title">Recent Activity</h2>
            </div>
            <div className="card-body">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="text-primary-600">📸</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">New photo uploaded</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-success-100 flex items-center justify-center">
                      <span className="text-success-600">✓</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Match found for Case #123</p>
                    <p className="text-xs text-gray-500">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-secondary-100 flex items-center justify-center">
                      <span className="text-secondary-600">💬</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">New comment on your case</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 