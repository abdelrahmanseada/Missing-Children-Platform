import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Upload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    childName: '',
    age: '',
    lastSeen: '',
    location: '',
    description: '',
    contactInfo: '',
  });
  const fileInputRef = useRef(null);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type
      if (!file.type.match('image/(jpeg|jpg|png)')) {
        toast.error('Please upload a JPG or PNG image');
        return;
      }
      
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast.error('Image size should be less than 10MB');
        return;
      }
      
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedImage) {
      toast.error('Please select an image');
      return;
    }
    
    if (!formData.childName || !formData.age) {
      toast.error('Please provide the child\'s name and age');
      return;
    }
    
    setIsUploading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create FormData for actual API submission
      const submissionData = new FormData();
      submissionData.append('image', selectedImage);
      Object.keys(formData).forEach(key => {
        submissionData.append(key, formData[key]);
      });
      
      // TODO: Replace with actual API call
      // const response = await fetch('/api/upload', {
      //   method: 'POST',
      //   body: submissionData
      // });
      
      toast.success('Photo uploaded successfully! Our AI is now analyzing the image.');
      
      // Reset form
      setSelectedImage(null);
      setPreviewUrl(null);
      setFormData({
        childName: '',
        age: '',
        lastSeen: '',
        location: '',
        description: '',
        contactInfo: '',
      });
      
      // Redirect to search page after successful upload
      // navigate('/search');
    } catch (error) {
      toast.error('Failed to upload photo. Please try again.');
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const file = e.dataTransfer.files[0];
    if (file) {
      // Check file type
      if (!file.type.match('image/(jpeg|jpg|png)')) {
        toast.error('Please upload a JPG or PNG image');
        return;
      }
      
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast.error('Image size should be less than 10MB');
        return;
      }
      
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Upload Missing Child Photo</h1>
        <p className="page-description">
          Upload a photo of a missing child to help with the search. Our AI will analyze the image and look for potential matches.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Upload Section */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Photo Upload</h3>
          </div>
          <div className="card-body">
            <div 
              className={`border-2 border-dashed rounded-lg p-8 text-center ${selectedImage ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-500'}`}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              {previewUrl ? (
                <div className="space-y-4">
                  <img 
                    src={previewUrl} 
                    alt="Preview" 
                    className="mx-auto max-h-64 rounded-lg shadow-md"
                  />
                  <div className="flex justify-center space-x-4">
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => {
                        setSelectedImage(null);
                        setPreviewUrl(null);
                      }}
                    >
                      Remove
                    </button>
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => fileInputRef.current.click()}
                    >
                      Change Photo
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="mx-auto h-12 w-12 text-gray-400">
                    <svg className="h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Drag and drop a photo here, or{' '}
                      <button
                        type="button"
                        className="text-primary-600 hover:text-primary-500 font-medium"
                        onClick={() => fileInputRef.current.click()}
                      >
                        browse
                      </button>
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      PNG, JPG up to 10MB
                    </p>
                  </div>
                </div>
              )}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/jpeg,image/png"
                onChange={handleImageSelect}
              />
            </div>
            
            <div className="mt-6 bg-yellow-50 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">Tips for best results</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Use a clear, front-facing photo</li>
                      <li>Ensure good lighting and minimal shadows</li>
                      <li>Avoid filters or heavily edited images</li>
                      <li>Include the most recent photo available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Child Information</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="form-group">
                  <label htmlFor="childName" className="form-label">Child's Name</label>
                  <input
                    type="text"
                    id="childName"
                    name="childName"
                    className="input-field"
                    value={formData.childName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="age" className="form-label">Age</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    className="input-field"
                    value={formData.age}
                    onChange={handleInputChange}
                    min="0"
                    max="17"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="lastSeen" className="form-label">Last Seen Date</label>
                <input
                  type="date"
                  id="lastSeen"
                  name="lastSeen"
                  className="input-field"
                  value={formData.lastSeen}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="location" className="form-label">Last Known Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="input-field"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="City, State, Country"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="description" className="form-label">Additional Details</label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="input-field"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Any distinguishing features, clothing, or circumstances of disappearance"
                ></textarea>
              </div>
              
              <div className="form-group">
                <label htmlFor="contactInfo" className="form-label">Contact Information</label>
                <input
                  type="text"
                  id="contactInfo"
                  name="contactInfo"
                  className="input-field"
                  value={formData.contactInfo}
                  onChange={handleInputChange}
                  placeholder="Phone number or email for authorities to contact"
                />
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <Link to="/search" className="text-sm text-primary-600 hover:text-primary-500">
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={isUploading || !selectedImage}
                >
                  {isUploading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Uploading...
                    </div>
                  ) : (
                    'Upload and Search'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 