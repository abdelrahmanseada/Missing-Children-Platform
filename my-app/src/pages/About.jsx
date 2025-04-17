import React from 'react';

export default function About() {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="bg-white shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              We are dedicated to leveraging advanced AI technology to help find missing children and reunite them with their families. Our platform combines cutting-edge facial recognition technology with community support to create a powerful network for locating missing children.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Technology</h3>
                <p className="text-primary-700">Using state-of-the-art AI to analyze and match photos of missing children.</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Community</h3>
                <p className="text-primary-700">Building a network of volunteers and organizations working together.</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Hope</h3>
                <p className="text-primary-700">Providing hope and support to families searching for their loved ones.</p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    1
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Photo Upload</h3>
                  <p className="mt-2 text-gray-600">
                    Users can upload photos of missing children to our platform. These photos are processed using our AI technology.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    2
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">AI Analysis</h3>
                  <p className="mt-2 text-gray-600">
                    Our advanced AI algorithms analyze the photos, considering factors like age progression and facial features.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Match Generation</h3>
                  <p className="mt-2 text-gray-600">
                    The system generates potential matches by comparing uploaded photos with our database of missing children cases.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    4
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Verification & Action</h3>
                  <p className="mt-2 text-gray-600">
                    Potential matches are verified by our team and relevant authorities before taking action to ensure accuracy and safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-white shadow rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
                <p className="text-gray-600">Children Found</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">50,000+</div>
                <p className="text-gray-600">Photos Analyzed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
                <p className="text-gray-600">Partner Organizations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-6">
              Have questions about our platform or want to learn more about how you can help? Contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">support@missingchildrenplatform.com</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 