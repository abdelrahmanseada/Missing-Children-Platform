import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function CaseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [caseData, setCaseData] = useState({
    title: '',
    description: '',
    priority: '',
    category: '',
    status: '',
    dueDate: '',
    assignedTo: '',
    createdAt: '',
    updatedAt: '',
    comments: [],
  });

  useEffect(() => {
    const fetchCaseDetails = async () => {
      try {
        // TODO: Implement actual case fetching logic
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data for demonstration
        setCaseData({
          title: 'Sample Case',
          description: 'This is a sample case description.',
          priority: 'high',
          category: 'Technical',
          status: 'In Progress',
          dueDate: '2024-12-31',
          assignedTo: 'John Doe',
          createdAt: '2024-01-01',
          updatedAt: '2024-01-02',
          comments: [
            {
              id: 1,
              author: 'John Doe',
              content: 'Initial comment',
              timestamp: '2024-01-01T10:00:00Z',
            },
          ],
        });
      } catch (error) {
        toast.error(error.message || 'Failed to fetch case details');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCaseDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCaseData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);

    try {
      // TODO: Implement actual case update logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsEditing(false);
      toast.success('Case updated successfully');
    } catch (error) {
      toast.error(error.message || 'Failed to update case');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    if (!comment.trim()) return;

    setIsLoading(true);

    try {
      // TODO: Implement actual comment addition logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setCaseData(prev => ({
        ...prev,
        comments: [
          ...prev.comments,
          {
            id: Date.now(),
            author: 'Current User', // TODO: Get actual user
            content: comment,
            timestamp: new Date().toISOString(),
          },
        ],
      }));
      
      e.target.comment.value = '';
      toast.success('Comment added successfully');
    } catch (error) {
      toast.error(error.message || 'Failed to add comment');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Case Details</h1>
        <div className="space-x-3">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="btn-secondary"
            >
              Edit Case
            </button>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={isLoading}
                className="btn-primary"
              >
                {isLoading ? 'Saving...' : 'Save Changes'}
              </button>
            </>
          )}
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              {isEditing ? (
                <input
                  type="text"
                  name="title"
                  value={caseData.title}
                  onChange={handleInputChange}
                  className="input-field mt-1"
                />
              ) : (
                <p className="mt-1 text-sm text-gray-900">{caseData.title}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              {isEditing ? (
                <select
                  name="status"
                  value={caseData.status}
                  onChange={handleInputChange}
                  className="input-field mt-1"
                >
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Closed">Closed</option>
                </select>
              ) : (
                <p className="mt-1 text-sm text-gray-900">{caseData.status}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Priority</label>
              {isEditing ? (
                <select
                  name="priority"
                  value={caseData.priority}
                  onChange={handleInputChange}
                  className="input-field mt-1"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              ) : (
                <p className="mt-1 text-sm text-gray-900 capitalize">{caseData.priority}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              {isEditing ? (
                <input
                  type="text"
                  name="category"
                  value={caseData.category}
                  onChange={handleInputChange}
                  className="input-field mt-1"
                />
              ) : (
                <p className="mt-1 text-sm text-gray-900">{caseData.category}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Due Date</label>
              {isEditing ? (
                <input
                  type="date"
                  name="dueDate"
                  value={caseData.dueDate}
                  onChange={handleInputChange}
                  className="input-field mt-1"
                />
              ) : (
                <p className="mt-1 text-sm text-gray-900">{caseData.dueDate}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Assigned To</label>
              {isEditing ? (
                <input
                  type="text"
                  name="assignedTo"
                  value={caseData.assignedTo}
                  onChange={handleInputChange}
                  className="input-field mt-1"
                />
              ) : (
                <p className="mt-1 text-sm text-gray-900">{caseData.assignedTo}</p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            {isEditing ? (
              <textarea
                name="description"
                value={caseData.description}
                onChange={handleInputChange}
                rows={4}
                className="input-field mt-1"
              />
            ) : (
              <p className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">{caseData.description}</p>
            )}
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Comments</h3>
          
          <div className="mt-4 space-y-4">
            {caseData.comments.map(comment => (
              <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{comment.author}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(comment.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-700">{comment.content}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleAddComment} className="mt-4">
            <div>
              <label htmlFor="comment" className="sr-only">Add a comment</label>
              <textarea
                id="comment"
                name="comment"
                rows={3}
                className="input-field"
                placeholder="Add a comment..."
                required
              />
            </div>
            <div className="mt-3 flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary"
              >
                {isLoading ? 'Adding...' : 'Add Comment'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 