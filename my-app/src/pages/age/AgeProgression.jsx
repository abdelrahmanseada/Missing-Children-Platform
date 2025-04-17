import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function AgeProgression() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [targetAge, setTargetAge] = useState(25);
  const [isProgression, setIsProgression] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultImage, setResultImage] = useState(null);
  const [showComparison, setShowComparison] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setResultImage(null);
        setShowComparison(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAgeChange = (e) => {
    setTargetAge(parseInt(e.target.value));
  };

  const handleTypeChange = (e) => {
    setIsProgression(e.target.value === 'progression');
  };

  const handleProcess = async () => {
    if (!selectedImage) {
      toast.error('Please select an image first');
      return;
    }

    setIsProcessing(true);
    setShowComparison(false);

    try {
      // TODO: Implement actual API call for age progression/regression
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock result for demonstration
      setResultImage('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
      setShowComparison(true);
      toast.success('Image processed successfully');
    } catch (error) {
      toast.error(error.message || 'Failed to process image');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!resultImage) return;
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resultImage;
    link.download = `age-${isProgression ? 'progression' : 'regression'}-${targetAge}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('Image downloaded successfully');
  };

  const handleShare = () => {
    if (!resultImage) return;
    
    // TODO: Implement actual sharing functionality
    toast.success('Image shared successfully');
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Age Progression/Regression</h1>
        <p className="page-description">
          Upload a photo to see how a person might look at a different age.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-medium text-gray-900">Upload Image</h2>
          </div>
          <div className="card-body">
            <div className="mb-6">
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  {selectedImage ? (
                    <div className="relative w-full h-full">
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="object-contain w-full h-full p-2"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white font-medium">Change Image</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 10MB)</p>
                    </div>
                  )}
                  <input
                    id="image-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageSelect}
                    ref={fileInputRef}
                  />
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="age-type" className="form-label">Type</label>
              <select
                id="age-type"
                name="age-type"
                className="input-field"
                value={isProgression ? 'progression' : 'regression'}
                onChange={handleTypeChange}
              >
                <option value="progression">Age Progression</option>
                <option value="regression">Age Regression</option>
              </select>
              <p className="form-hint">
                {isProgression
                  ? 'See how a person might look older'
                  : 'See how a person might look younger'}
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="target-age" className="form-label">
                Target Age: {targetAge} years
              </label>
              <input
                type="range"
                id="target-age"
                name="target-age"
                min="1"
                max="100"
                value={targetAge}
                onChange={handleAgeChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="btn-primary w-full"
                onClick={handleProcess}
                disabled={!selectedImage || isProcessing}
              >
                {isProcessing ? (
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
                    Processing...
                  </div>
                ) : (
                  'Process Image'
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-medium text-gray-900">Result</h2>
          </div>
          <div className="card-body">
            {resultImage ? (
              <div>
                {showComparison ? (
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Original</p>
                        <div className="aspect-w-1 aspect-h-1">
                          <img
                            src={selectedImage}
                            alt="Original"
                            className="object-cover w-full h-full rounded-lg"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          {isProgression ? 'Progressed' : 'Regressed'} to {targetAge} years
                        </p>
                        <div className="aspect-w-1 aspect-h-1">
                          <img
                            src={resultImage}
                            alt="Result"
                            className="object-cover w-full h-full rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <button
                    type="button"
                    className="btn-primary flex-1"
                    onClick={handleDownload}
                  >
                    Download Result
                  </button>
                  <button
                    type="button"
                    className="btn-secondary flex-1"
                    onClick={handleShare}
                  >
                    Share
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No result yet</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Upload an image and click "Process Image" to see the result.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 card">
        <div className="card-header">
          <h2 className="text-lg font-medium text-gray-900">How It Works</h2>
        </div>
        <div className="card-body">
          <div className="prose max-w-none">
            <p>
              Our age progression and regression technology uses advanced AI algorithms to predict how a person might look at a different age.
            </p>
            <h3>Age Progression</h3>
            <p>
              Age progression is used to show how a person might look older than they are in the original photo. This is particularly useful for missing person cases where the person has been missing for a long time.
            </p>
            <h3>Age Regression</h3>
            <p>
              Age regression shows how a person might have looked when they were younger. This can be helpful for cases where you have a recent photo but need to see how they looked in the past.
            </p>
            <h3>Tips for Best Results</h3>
            <ul>
              <li>Use a clear, front-facing photo with good lighting</li>
              <li>Avoid photos with heavy filters or editing</li>
              <li>For best results, use a photo where the person's face is clearly visible</li>
              <li>The more recent the photo, the more accurate the progression/regression will be</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 