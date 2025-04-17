import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="flex flex-col w-full min-h-full bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="page-header">
          <h1 className="page-title">About Our Platform</h1>
          <p className="page-description">
            Learn about our mission to help find missing children through advanced AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Our Mission</h2>
            </div>
            <div className="card-body">
              <p className="mb-4">
                Our platform is dedicated to helping find missing children through the power of artificial intelligence. 
                We believe that every child deserves to be safe and reunited with their loved ones.
              </p>
              <p className="mb-4">
                By leveraging cutting-edge AI technology, we provide tools that can analyze photos, 
                generate age-progressed images, and match faces across different conditions and time periods.
              </p>
              <p>
                We work closely with law enforcement agencies, non-profit organizations, and families 
                to maximize the chances of finding missing children and bringing them home safely.
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">How It Works</h2>
            </div>
            <div className="card-body">
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                      <span className="text-lg font-bold">1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Upload Photos</h3>
                    <p className="mt-1 text-gray-500">
                      Families and law enforcement can upload photos of missing children to our platform.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                      <span className="text-lg font-bold">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">AI Analysis</h3>
                    <p className="mt-1 text-gray-500">
                      Our AI technology analyzes the photos, generates age-progressed images, and searches for potential matches.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                      <span className="text-lg font-bold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Review & Report</h3>
                    <p className="mt-1 text-gray-500">
                      Potential matches are reviewed, and verified leads are reported to the appropriate authorities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Our Technology</h2>
            </div>
            <div className="card-body">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Facial Recognition</h3>
                  <p className="mt-1 text-gray-500">
                    Our advanced facial recognition algorithms can identify faces across different lighting conditions, 
                    angles, and even with partial visibility.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Age Progression</h3>
                  <p className="mt-1 text-gray-500">
                    We use AI to generate accurate age-progressed images, showing how a missing child might look now, 
                    even years after their disappearance.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Pattern Recognition</h3>
                  <p className="mt-1 text-gray-500">
                    Our system can identify patterns in missing children cases, helping to connect seemingly unrelated incidents 
                    and providing valuable insights to investigators.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Get Involved</h2>
            </div>
            <div className="card-body">
              <p className="mb-4">
                There are many ways you can help in the search for missing children:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Upload photos of missing children to our platform</li>
                <li>Share information about missing children cases on social media</li>
                <li>Volunteer with organizations dedicated to finding missing children</li>
                <li>Donate to support our technology development and operations</li>
                <li>Report any information about missing children to the appropriate authorities</li>
              </ul>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link to="/upload" className="btn-primary">
                  Upload a Photo
                </Link>
                <Link to="/search" className="btn-secondary">
                  Search Cases
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 card">
          <div className="card-header">
            <h2 className="card-title">Our Impact</h2>
          </div>
          <div className="card-body">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">500+</div>
                <div className="mt-2 text-lg text-gray-500">Children Found</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">10,000+</div>
                <div className="mt-2 text-lg text-gray-500">Photos Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">24/7</div>
                <div className="mt-2 text-lg text-gray-500">AI Processing</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600">50+</div>
                <div className="mt-2 text-lg text-gray-500">Partner Organizations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 