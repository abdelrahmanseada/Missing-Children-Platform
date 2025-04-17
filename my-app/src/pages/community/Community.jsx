import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Community() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // TODO: Implement actual API call to fetch community posts
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data for demonstration
        setPosts([
          {
            id: 1,
            title: 'Missing Child: Tommy Wilson',
            description: 'Last seen at Central Park playground on January 15, 2024. Wearing blue jeans, red t-shirt with superhero print, and white sneakers. Age: 8',
            image: 'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            author: {
              id: 1,
              name: 'Sarah Wilson',
              avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            },
            createdAt: '2024-01-16T10:00:00Z',
            comments: 15,
            likes: 32,
            shares: 128,
            status: 'active',
          },
          {
            id: 2,
            title: 'Missing Child: Emily Martinez',
            description: 'Last seen near Lincoln Elementary School on January 10, 2024. Wearing pink backpack, blue school uniform. Age: 10. Please contact authorities if seen.',
            image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            author: {
              id: 2,
              name: 'Maria Martinez',
              avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            },
            createdAt: '2024-01-11T14:30:00Z',
            comments: 18,
            likes: 45,
            shares: 256,
            status: 'active',
          },
          {
            id: 3,
            title: 'Missing Child: James Thompson',
            description: 'Last seen at Memorial Park on January 5, 2024. Wearing green jacket, black pants, carrying a blue school bag. Age: 12. Any information is valuable.',
            image: 'https://images.unsplash.com/photo-1555009393-f20bdb245c4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            author: {
              id: 3,
              name: 'Robert Thompson',
              avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            },
            createdAt: '2024-01-06T09:15:00Z',
            comments: 23,
            likes: 67,
            shares: 189,
            status: 'active',
          },
        ]);
      } catch (error) {
        toast.error(error.message || 'Failed to fetch community posts');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleShare = (postId) => {
    // TODO: Implement actual sharing functionality
    toast.success('Post shared successfully');
  };

  const handleLike = (postId) => {
    // TODO: Implement actual like functionality
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 } 
        : post
    ));
    toast.success('Post liked');
  };

  const filteredPosts = posts.filter(post => {
    if (filter === 'all') return true;
    // Add more filter logic here
    return true;
  }).filter(post => {
    if (!searchTerm) return true;
    return post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
           post.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Missing Children Community</h1>
          <p className="text-lg text-blue-700">Together we can make a difference. Share and help find missing children.</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search cases..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
              <svg className="absolute left-3 top-3.5 h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
              </svg>
            </div>
            <select
              value={filter}
              onChange={handleFilterChange}
              className="w-full md:w-48 py-3 px-4 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white transition-colors"
            >
              <option value="all">All Cases</option>
              <option value="recent">Recent Cases</option>
              <option value="urgent">Urgent Cases</option>
              <option value="resolved">Resolved Cases</option>
            </select>
          </div>
        </div>

        {/* Posts Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
                <div className="relative">
                  <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      post.status === 'resolved' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {post.status === 'resolved' ? 'Found' : 'Missing'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-blue-900 mb-2">{post.title}</h2>
                  <p className="text-blue-700 mb-4">{post.description}</p>
                  
                  <div className="flex items-center mb-4">
                    <img src={post.author.avatar} alt={post.author.name} className="h-10 w-10 rounded-full" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-blue-900">{post.author.name}</p>
                      <p className="text-sm text-blue-600">
                        {new Date(post.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-blue-100">
                    <button
                      onClick={() => handleLike(post.id)}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M1 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 01-2.5 0v-7.5zM8 3.75A1.25 1.25 0 109.25 5h-2.5a1.25 1.25 0 010-2.5h2.5zM15 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 01-2.5 0v-7.5zM8 8.25a1.25 1.25 0 112.5 0v7.5a1.25 1.25 0 01-2.5 0v-7.5z" />
                      </svg>
                      <span>{post.likes}</span>
                    </button>

                    <button
                      onClick={() => handleShare(post.id)}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.733 3.367a2.5 2.5 0 11-.671 1.341l-6.733-3.367a2.5 2.5 0 110-3.475l6.733-3.367A2.52 2.52 0 0113 4.5z" />
                      </svg>
                      <span>{post.shares}</span>
                    </button>

                    <Link
                      to={`/case/${post.id}`}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-300"
                    >
                      View Details
                      <svg className="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 