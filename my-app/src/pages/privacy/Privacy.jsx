import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Privacy() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isSaving, setIsSaving] = useState(false);

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    allowTagging: true,
    allowMessaging: true,
    dataSharing: 'limited',
    locationSharing: false,
    activityStatus: true,
    searchable: true,
    allowAnalytics: true,
    allowCookies: true,
    allowThirdParty: false
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (field, value) => {
    setPrivacySettings({
      ...privacySettings,
      [field]: value
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Privacy settings saved successfully');
    } catch (error) {
      toast.error('Failed to save privacy settings');
      console.error('Error saving privacy settings:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = () => {
    setPrivacySettings({
      profileVisibility: 'public',
      showEmail: false,
      showPhone: false,
      allowTagging: true,
      allowMessaging: true,
      dataSharing: 'limited',
      locationSharing: false,
      activityStatus: true,
      searchable: true,
      allowAnalytics: true,
      allowCookies: true,
      allowThirdParty: false
    });
    toast.success('Privacy settings reset to defaults');
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-primary-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-primary-800">Privacy Overview</h3>
        <p className="mt-1 text-sm text-primary-700">
          Your privacy is important to us. This page helps you understand and control how your information is used.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Profile Visibility</h3>
          </div>
          <div className="card-body">
            <p className="text-sm text-gray-500 mb-4">
              Control who can see your profile information and activity.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Current Setting</h4>
                <p className="text-sm text-gray-500">
                  {privacySettings.profileVisibility === 'public' 
                    ? 'Your profile is visible to everyone' 
                    : privacySettings.profileVisibility === 'friends' 
                      ? 'Your profile is visible to friends only' 
                      : 'Your profile is private'}
                </p>
              </div>
              <Link to="/settings" className="btn-secondary text-sm">
                Change
              </Link>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Data Sharing</h3>
          </div>
          <div className="card-body">
            <p className="text-sm text-gray-500 mb-4">
              Control how your data is shared with third parties.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Current Setting</h4>
                <p className="text-sm text-gray-500">
                  {privacySettings.dataSharing === 'full' 
                    ? 'Full data sharing enabled' 
                    : privacySettings.dataSharing === 'limited' 
                      ? 'Limited data sharing enabled' 
                      : privacySettings.dataSharing === 'minimal' 
                        ? 'Minimal data sharing enabled' 
                        : 'No data sharing'}
                </p>
              </div>
              <Link to="/settings" className="btn-secondary text-sm">
                Change
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Recent Privacy Activity</h3>
        </div>
        <div className="card-body">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Activity</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Today</td>
                  <td>Profile Updated</td>
                  <td>Changed profile visibility settings</td>
                </tr>
                <tr>
                  <td>Yesterday</td>
                  <td>Login</td>
                  <td>New device login from New York, USA</td>
                </tr>
                <tr>
                  <td>3 days ago</td>
                  <td>Data Request</td>
                  <td>Downloaded personal data</td>
                </tr>
                <tr>
                  <td>1 week ago</td>
                  <td>Settings Changed</td>
                  <td>Updated notification preferences</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Profile Privacy</h3>
        </div>
        <div className="card-body">
          <div className="space-y-4">
            <div className="form-group">
              <label htmlFor="profileVisibility" className="form-label">Profile Visibility</label>
              <select
                id="profileVisibility"
                className="input-field"
                value={privacySettings.profileVisibility}
                onChange={(e) => handleInputChange('profileVisibility', e.target.value)}
              >
                <option value="public">Public</option>
                <option value="friends">Friends Only</option>
                <option value="private">Private</option>
              </select>
              <p className="form-hint">Control who can see your profile information.</p>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Show Email Address</h4>
                <p className="text-sm text-gray-500">Display your email address on your profile</p>
              </div>
              <button
                type="button"
                className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                  privacySettings.showEmail ? 'bg-primary-600' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={privacySettings.showEmail}
                aria-labelledby="show-email-label"
                onClick={() => handleInputChange('showEmail', !privacySettings.showEmail)}
              >
                <span
                  aria-hidden="true"
                  className={`${
                    privacySettings.showEmail ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                ></span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Show Phone Number</h4>
                <p className="text-sm text-gray-500">Display your phone number on your profile</p>
              </div>
              <button
                type="button"
                className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                  privacySettings.showPhone ? 'bg-primary-600' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={privacySettings.showPhone}
                aria-labelledby="show-phone-label"
                onClick={() => handleInputChange('showPhone', !privacySettings.showPhone)}
              >
                <span
                  aria-hidden="true"
                  className={`${
                    privacySettings.showPhone ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                ></span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Allow Tagging</h4>
                <p className="text-sm text-gray-500">Allow others to tag you in posts and comments</p>
              </div>
              <button
                type="button"
                className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                  privacySettings.allowTagging ? 'bg-primary-600' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={privacySettings.allowTagging}
                aria-labelledby="allow-tagging-label"
                onClick={() => handleInputChange('allowTagging', !privacySettings.allowTagging)}
              >
                <span
                  aria-hidden="true"
                  className={`${
                    privacySettings.allowTagging ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                ></span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Allow Messaging</h4>
                <p className="text-sm text-gray-500">Allow others to send you direct messages</p>
              </div>
              <button
                type="button"
                className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                  privacySettings.allowMessaging ? 'bg-primary-600' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={privacySettings.allowMessaging}
                aria-labelledby="allow-messaging-label"
                onClick={() => handleInputChange('allowMessaging', !privacySettings.allowMessaging)}
              >
                <span
                  aria-hidden="true"
                  className={`${
                    privacySettings.allowMessaging ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Data Sharing</h3>
        </div>
        <div className="card-body">
          <div className="space-y-4">
            <div className="form-group">
              <label htmlFor="dataSharing" className="form-label">Data Sharing Level</label>
              <select
                id="dataSharing"
                className="input-field"
                value={privacySettings.dataSharing}
                onChange={(e) => handleInputChange('dataSharing', e.target.value)}
              >
                <option value="full">Full</option>
                <option value="limited">Limited</option>
                <option value="minimal">Minimal</option>
                <option value="none">None</option>
              </select>
              <p className="form-hint">Control how your data is shared with third parties.</p>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Location Sharing</h4>
                <p className="text-sm text-gray-500">Allow the app to access your location</p>
              </div>
              <button
                type="button"
                className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                  privacySettings.locationSharing ? 'bg-primary-600' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={privacySettings.locationSharing}
                aria-labelledby="location-sharing-label"
                onClick={() => handleInputChange('locationSharing', !privacySettings.locationSharing)}
              >
                <span
                  aria-hidden="true"
                  className={`${
                    privacySettings.locationSharing ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                ></span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Activity Status</h4>
                <p className="text-sm text-gray-500">Show when you're active on the platform</p>
              </div>
              <button
                type="button"
                className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                  privacySettings.activityStatus ? 'bg-primary-600' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={privacySettings.activityStatus}
                aria-labelledby="activity-status-label"
                onClick={() => handleInputChange('activityStatus', !privacySettings.activityStatus)}
              >
                <span
                  aria-hidden="true"
                  className={`${
                    privacySettings.activityStatus ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                ></span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Searchable</h4>
                <p className="text-sm text-gray-500">Allow others to find you through search</p>
              </div>
              <button
                type="button"
                className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                  privacySettings.searchable ? 'bg-primary-600' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={privacySettings.searchable}
                aria-labelledby="searchable-label"
                onClick={() => handleInputChange('searchable', !privacySettings.searchable)}
              >
                <span
                  aria-hidden="true"
                  className={`${
                    privacySettings.searchable ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Cookies & Tracking</h3>
        </div>
        <div className="card-body">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Analytics Cookies</h4>
                <p className="text-sm text-gray-500">Allow us to collect anonymous usage data</p>
              </div>
              <button
                type="button"
                className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                  privacySettings.allowAnalytics ? 'bg-primary-600' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={privacySettings.allowAnalytics}
                aria-labelledby="analytics-cookies-label"
                onClick={() => handleInputChange('allowAnalytics', !privacySettings.allowAnalytics)}
              >
                <span
                  aria-hidden="true"
                  className={`${
                    privacySettings.allowAnalytics ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                ></span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Essential Cookies</h4>
                <p className="text-sm text-gray-500">Required for the website to function properly</p>
              </div>
              <button
                type="button"
                className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                  privacySettings.allowCookies ? 'bg-primary-600' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={privacySettings.allowCookies}
                aria-labelledby="essential-cookies-label"
                onClick={() => handleInputChange('allowCookies', !privacySettings.allowCookies)}
              >
                <span
                  aria-hidden="true"
                  className={`${
                    privacySettings.allowCookies ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                ></span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Third-Party Cookies</h4>
                <p className="text-sm text-gray-500">Allow cookies from third-party services</p>
              </div>
              <button
                type="button"
                className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                  privacySettings.allowThirdParty ? 'bg-primary-600' : 'bg-gray-200'
                }`}
                role="switch"
                aria-checked={privacySettings.allowThirdParty}
                aria-labelledby="third-party-cookies-label"
                onClick={() => handleInputChange('allowThirdParty', !privacySettings.allowThirdParty)}
              >
                <span
                  aria-hidden="true"
                  className={`${
                    privacySettings.allowThirdParty ? 'translate-x-5' : 'translate-x-0'
                  } pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDataRights = () => (
    <div className="space-y-6">
      <div className="bg-primary-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-primary-800">Your Data Rights</h3>
        <p className="mt-1 text-sm text-primary-700">
          Under data protection laws, you have rights regarding your personal data. Learn about these rights and how to exercise them.
        </p>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Data Rights Overview</h3>
        </div>
        <div className="card-body">
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900">Right to Access</h4>
              <p className="mt-1 text-sm text-gray-500">
                You have the right to request a copy of the personal data we hold about you.
              </p>
              <button type="button" className="mt-2 btn-secondary text-sm">
                Request Data
              </button>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900">Right to Rectification</h4>
              <p className="mt-1 text-sm text-gray-500">
                You have the right to request that we correct any inaccurate personal data we hold about you.
              </p>
              <button type="button" className="mt-2 btn-secondary text-sm">
                Correct Data
              </button>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900">Right to Erasure</h4>
              <p className="mt-1 text-sm text-gray-500">
                You have the right to request that we delete your personal data in certain circumstances.
              </p>
              <button type="button" className="mt-2 btn-secondary text-sm">
                Request Deletion
              </button>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900">Right to Restrict Processing</h4>
              <p className="mt-1 text-sm text-gray-500">
                You have the right to request that we restrict the processing of your personal data in certain circumstances.
              </p>
              <button type="button" className="mt-2 btn-secondary text-sm">
                Restrict Processing
              </button>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900">Right to Data Portability</h4>
              <p className="mt-1 text-sm text-gray-500">
                You have the right to request that we transfer your personal data to another organization in a structured, commonly used, and machine-readable format.
              </p>
              <button type="button" className="mt-2 btn-secondary text-sm">
                Request Transfer
              </button>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900">Right to Object</h4>
              <p className="mt-1 text-sm text-gray-500">
                You have the right to object to the processing of your personal data in certain circumstances.
              </p>
              <button type="button" className="mt-2 btn-secondary text-sm">
                Object to Processing
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Data Requests</h3>
        </div>
        <div className="card-body">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Request Type</th>
                  <th>Date Submitted</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data Access</td>
                  <td>May 15, 2023</td>
                  <td>
                    <span className="badge badge-success">Completed</span>
                  </td>
                  <td>
                    <button type="button" className="text-primary-600 hover:text-primary-500 text-sm">
                      View Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Data Deletion</td>
                  <td>June 2, 2023</td>
                  <td>
                    <span className="badge badge-warning">In Progress</span>
                  </td>
                  <td>
                    <button type="button" className="text-primary-600 hover:text-primary-500 text-sm">
                      View Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Data Correction</td>
                  <td>July 10, 2023</td>
                  <td>
                    <span className="badge badge-success">Completed</span>
                  </td>
                  <td>
                    <button type="button" className="text-primary-600 hover:text-primary-500 text-sm">
                      View Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <button type="button" className="btn-primary">
              Submit New Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPolicies = () => (
    <div className="space-y-6">
      <div className="bg-primary-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-primary-800">Privacy Policies</h3>
        <p className="mt-1 text-sm text-primary-700">
          Our privacy policies explain how we collect, use, and protect your personal information.
        </p>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Privacy Policy</h3>
        </div>
        <div className="card-body">
          <div className="prose max-w-none">
            <p>
              Our Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
            <h4>Information We Collect</h4>
            <p>
              We collect information that you provide directly to us, information we obtain automatically when you visit our website or use our services, and information from third-party sources.
            </p>
            <h4>How We Use Your Information</h4>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect our platform and our users.
            </p>
            <h4>Information Sharing and Disclosure</h4>
            <p>
              We do not share your personal information except in the limited circumstances described in this privacy policy.
            </p>
            <h4>Data Security</h4>
            <p>
              We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
            </p>
            <h4>Your Choices</h4>
            <p>
              You have certain choices regarding the information we collect and how it is used.
            </p>
            <h4>Changes to This Privacy Policy</h4>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date.
            </p>
            <h4>Contact Us</h4>
            <p>
              If you have any questions about this privacy policy, please contact us at privacy@example.com.
            </p>
          </div>
          <div className="mt-6">
            <button type="button" className="btn-secondary">
              Download PDF
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Terms of Service</h3>
        </div>
        <div className="card-body">
          <div className="prose max-w-none">
            <p>
              Our Terms of Service govern your use of our website and services. By using our website or services, you agree to these terms.
            </p>
            <p>
              Please read these terms carefully. If you do not agree with these terms, please do not use our website or services.
            </p>
            <h4>Account Registration</h4>
            <p>
              To access certain features of our website or services, you may be required to register for an account.
            </p>
            <h4>User Content</h4>
            <p>
              You retain all rights to any content you submit, post, or display on or through our website or services.
            </p>
            <h4>Prohibited Conduct</h4>
            <p>
              You agree not to engage in any prohibited conduct when using our website or services.
            </p>
            <h4>Termination</h4>
            <p>
              We may terminate or suspend your account and access to our website or services at our sole discretion, without notice, for conduct that we believe violates these terms or is harmful to other users of our website or services, us, or third parties, or for any other reason.
            </p>
            <h4>Changes to These Terms</h4>
            <p>
              We may update these terms from time to time. We will notify you of any changes by posting the new terms on this page and updating the "Last Updated" date.
            </p>
            <h4>Contact Us</h4>
            <p>
              If you have any questions about these terms, please contact us at terms@example.com.
            </p>
          </div>
          <div className="mt-6">
            <button type="button" className="btn-secondary">
              Download PDF
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Cookie Policy</h3>
        </div>
        <div className="card-body">
          <div className="prose max-w-none">
            <p>
              Our Cookie Policy explains how we use cookies and similar technologies to recognize you when you visit our website or use our services.
            </p>
            <p>
              Please read this cookie policy carefully. If you do not agree with the terms of this cookie policy, please do not access the site or use our services.
            </p>
            <h4>What Are Cookies</h4>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
            </p>
            <h4>How We Use Cookies</h4>
            <p>
              We use cookies for various purposes, including to remember your preferences, to understand how you use our website or services, and to improve your experience.
            </p>
            <h4>Types of Cookies We Use</h4>
            <p>
              We use both session cookies and persistent cookies, and we use different types of cookies to run our website or services.
            </p>
            <h4>Your Choices Regarding Cookies</h4>
            <p>
              You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings.
            </p>
            <h4>Changes to This Cookie Policy</h4>
            <p>
              We may update this cookie policy from time to time. We will notify you of any changes by posting the new cookie policy on this page and updating the "Last Updated" date.
            </p>
            <h4>Contact Us</h4>
            <p>
              If you have any questions about this cookie policy, please contact us at cookies@example.com.
            </p>
          </div>
          <div className="mt-6">
            <button type="button" className="btn-secondary">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'settings':
        return renderSettings();
      case 'data-rights':
        return renderDataRights();
      case 'policies':
        return renderPolicies();
      default:
        return renderOverview();
    }
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Privacy</h1>
        <p className="page-description">
          Manage your privacy settings and learn about how we protect your data.
        </p>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => handleTabChange('overview')}
                className={`${
                  activeTab === 'overview'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                aria-current={activeTab === 'overview' ? 'page' : undefined}
              >
                Overview
              </button>
              <button
                onClick={() => handleTabChange('settings')}
                className={`${
                  activeTab === 'settings'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                aria-current={activeTab === 'settings' ? 'page' : undefined}
              >
                Settings
              </button>
              <button
                onClick={() => handleTabChange('data-rights')}
                className={`${
                  activeTab === 'data-rights'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                aria-current={activeTab === 'data-rights' ? 'page' : undefined}
              >
                Data Rights
              </button>
              <button
                onClick={() => handleTabChange('policies')}
                className={`${
                  activeTab === 'policies'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                aria-current={activeTab === 'policies' ? 'page' : undefined}
              >
                Policies
              </button>
            </nav>
          </div>
        </div>
        <div className="card-body">
          {renderActiveTab()}
          
          {activeTab === 'settings' && (
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                className="btn-primary"
                onClick={handleSave}
                disabled={isSaving}
              >
                {isSaving ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Saving...
                  </div>
                ) : (
                  'Save Changes'
                )}
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={handleReset}
              >
                Reset to Defaults
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 