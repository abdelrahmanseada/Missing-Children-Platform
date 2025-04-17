import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function FacialMatching() {
  const [referenceImage, setReferenceImage] = useState(null);
  const [targetImage, setTargetImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [matchResult, setMatchResult] = useState(null);
  const [showComparison, setShowComparison] = useState(false);
  const referenceInputRef = useRef(null);
  const targetInputRef = useRef(null);

  const handleReferenceImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setReferenceImage(e.target.result);
        setMatchResult(null);
        setShowComparison(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTargetImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTargetImage(e.target.result);
        setMatchResult(null);
        setShowComparison(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProcess = async () => {
    if (!referenceImage || !targetImage) {
      toast.error('Please select both reference and target images');
      return;
    }

    setIsProcessing(true);
    setShowComparison(false);

    try {
      // TODO: Implement actual API call for facial matching
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock result for demonstration
      setMatchResult({
        similarity: 0.85,
        confidence: 'High',
        matchPoints: [
          { x: 100, y: 150, label: 'Eyes' },
          { x: 200, y: 200, label: 'Nose' },
          { x: 300, y: 250, label: 'Mouth' }
        ]
      });
      setShowComparison(true);
      toast.success('Facial matching completed successfully');
    } catch (error) {
      toast.error(error.message || 'Failed to process images');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!matchResult) return;
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = targetImage;
    link.download = 'facial-match-result.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('Match result downloaded successfully');
  };

  const handleShare = () => {
    if (!matchResult) return;
    
    // TODO: Implement actual sharing functionality
    toast.success('Match result shared successfully');
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Facial Similarity Matching</h1>
        <p className="page-description">
          Compare two facial images to determine their similarity and identify matching features.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-medium text-gray-900">Upload Images</h2>
          </div>
          <div className="card-body">
            <div className="mb-6">
              <label className="form-label">Reference Image</label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="reference-image-upload"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  {referenceImage ? (
                    <div className="relative w-full h-full">
                      <img
                        src={referenceImage}
                        alt="Reference"
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
                    id="reference-image-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleReferenceImageSelect}
                    ref={referenceInputRef}
                  />
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label className="form-label">Target Image</label>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="target-image-upload"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  {targetImage ? (
                    <div className="relative w-full h-full">
                      <img
                        src={targetImage}
                        alt="Target"
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
                    id="target-image-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleTargetImageSelect}
                    ref={targetInputRef}
                  />
                </label>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="btn-primary w-full"
                onClick={handleProcess}
                disabled={!referenceImage || !targetImage || isProcessing}
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
                  'Compare Images'
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="text-lg font-medium text-gray-900">Match Result</h2>
          </div>
          <div className="card-body">
            {matchResult ? (
              <div>
                {showComparison ? (
                  <div>
                    <div className="mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Reference</p>
                          <div className="aspect-w-1 aspect-h-1">
                            <img
                              src={referenceImage}
                              alt="Reference"
                              className="object-cover w-full h-full rounded-lg"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-2">Target</p>
                          <div className="aspect-w-1 aspect-h-1">
                            <img
                              src={targetImage}
                              alt="Target"
                              className="object-cover w-full h-full rounded-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Similarity Analysis</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-medium text-gray-500">Similarity Score</p>
                            <p className="text-2xl font-bold text-primary-600">
                              {(matchResult.similarity * 100).toFixed(1)}%
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">Confidence</p>
                            <p className="text-2xl font-bold text-primary-600">
                              {matchResult.confidence}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Matching Features</h3>
                      <ul className="space-y-2">
                        {matchResult.matchPoints.map((point, index) => (
                          <li key={index} className="flex items-center">
                            <svg
                              className="h-5 w-5 text-primary-500 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-sm text-gray-700">{point.label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
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
                  <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
                  </div>
                )}
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
                  Upload both images and click "Compare Images" to see the result.
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
              Our facial similarity matching technology uses advanced AI algorithms to compare two facial images and determine their similarity.
            </p>
            <h3>Reference Image</h3>
            <p>
              The reference image is typically a known photo of the person you're trying to match. This could be a photo from an ID, a missing person report, or any other verified source.
            </p>
            <h3>Target Image</h3>
            <p>
              The target image is the photo you want to compare against the reference image. This could be a photo from a surveillance camera, social media, or any other source where you suspect the person might be.
            </p>
            <h3>Similarity Analysis</h3>
            <p>
              The system analyzes various facial features and characteristics to determine how similar the two images are. The similarity score is presented as a percentage, and a confidence level is provided to indicate the reliability of the match.
            </p>
            <h3>Tips for Best Results</h3>
            <ul>
              <li>Use clear, well-lit photos with good resolution</li>
              <li>Ensure faces are clearly visible and not obscured</li>
              <li>Try to use photos taken from similar angles</li>
              <li>Avoid heavily edited or filtered photos</li>
              <li>The more recent the reference photo, the more accurate the match will be</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 