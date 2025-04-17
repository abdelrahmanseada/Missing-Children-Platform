import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center w-full">
        <div className="absolute inset-0 overflow-hidden">
          {/* Background image of a child */}
          <img 
            src="https://images.unsplash.com/photo-1504438190342-5951e134ffee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Child looking at sunset" 
            className="w-full h-full object-cover object-center transform scale-105 animate-slowly-zoom brightness-75"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/75 via-blue-800/60 to-transparent"></div>
        </div>
        <div className="relative w-full px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl mb-6 text-white drop-shadow-lg">
              <span className="block mb-2">Help Find Missing Children</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400">
                Through AI Technology
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-100 drop-shadow-md">
              Our platform uses advanced AI to help locate missing children by analyzing and matching photos. 
              Every second counts in bringing children home safely.
            </p>
            <div className="mx-auto mt-12 flex max-w-md flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0 justify-center">
              <Link
                to="/upload"
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-xl hover:from-blue-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Upload Photo
              </Link>
              <Link
                to="/search"
                className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-lg font-semibold border-2 border-white bg-white/10 backdrop-blur-sm text-white shadow-xl hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search Cases
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 w-full bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-blue-900 sm:text-5xl mb-4">
              How It Works
            </h2>
            <p className="mt-4 text-xl text-blue-600">
              Our AI-powered platform makes it easy to search for missing children
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {/* Step 1 */}
              <div className="relative group">
                <div className="flex flex-col items-center transform transition-transform duration-300 group-hover:scale-105">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
                    <span className="text-3xl font-bold">1</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold text-blue-900">Upload a Photo</h3>
                  <p className="mt-4 text-center text-lg text-blue-600">
                    Upload a clear photo of the missing child. The better the quality, the more accurate our AI matching will be.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="flex flex-col items-center transform transition-transform duration-300 group-hover:scale-105">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
                    <span className="text-3xl font-bold">2</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold text-blue-900">AI Analysis</h3>
                  <p className="mt-4 text-center text-lg text-blue-600">
                    Our advanced AI technology analyzes the photo and searches for potential matches in our database.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="flex flex-col items-center transform transition-transform duration-300 group-hover:scale-105">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
                    <span className="text-3xl font-bold">3</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold text-blue-900">Review Results</h3>
                  <p className="mt-4 text-center text-lg text-blue-600">
                    Review potential matches and contact authorities if you believe you've found the missing child.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold sm:text-5xl mb-4">
              Advanced Features
            </h2>
            <p className="mt-4 text-xl text-blue-200">
              Cutting-edge technology to help find missing children
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-400 rounded-lg">
                  <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="ml-4 text-2xl font-semibold">AI Face Recognition</h3>
              </div>
              <p className="text-blue-200 text-lg">
                State-of-the-art facial recognition technology to identify potential matches with high accuracy.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-400 rounded-lg">
                  <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="ml-4 text-2xl font-semibold">Age Progression</h3>
              </div>
              <p className="text-blue-200 text-lg">
                Advanced age progression technology to show how a missing child might look today.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-400 rounded-lg">
                  <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="ml-4 text-2xl font-semibold">Real-time Alerts</h3>
              </div>
              <p className="text-blue-200 text-lg">
                Instant notifications when potential matches are found in your area.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}