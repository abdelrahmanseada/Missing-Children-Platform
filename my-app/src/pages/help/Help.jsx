import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Help() {
  const [activeTab, setActiveTab] = useState('faq');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [supportTicket, setSupportTicket] = useState({
    subject: '',
    category: 'general',
    description: '',
    priority: 'medium'
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (field, value) => {
    setSupportTicket({
      ...supportTicket,
      [field]: value
    });
  };

  const handleSubmitTicket = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Support ticket submitted successfully');
      setSupportTicket({
        subject: '',
        category: 'general',
        description: '',
        priority: 'medium'
      });
    } catch (error) {
      toast.error('Failed to submit support ticket');
      console.error('Error submitting support ticket:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqCategories = [
    {
      id: 'account',
      title: 'Account & Profile',
      questions: [
        {
          question: 'How do I create an account?',
          answer: 'To create an account, click on the "Sign Up" button in the top right corner of the homepage. Fill in your details, verify your email, and you\'re all set!'
        },
        {
          question: 'How do I reset my password?',
          answer: 'If you\'ve forgotten your password, click on the "Forgot Password" link on the login page. Enter your email address, and we\'ll send you instructions to reset your password.'
        },
        {
          question: 'How do I update my profile information?',
          answer: 'To update your profile, go to the "Profile" page and click on the "Edit" button. You can then modify your information and save your changes.'
        },
        {
          question: 'Can I delete my account?',
          answer: 'Yes, you can delete your account by going to the "Settings" page, scrolling down to the "Account" section, and clicking on "Delete Account". Please note that this action is irreversible.'
        }
      ]
    },
    {
      id: 'age-progression',
      title: 'Age Progression',
      questions: [
        {
          question: 'How does the age progression feature work?',
          answer: 'Our age progression feature uses advanced AI algorithms to simulate how a person might look at different ages. Upload a photo, select the target age, and our system will generate an age-progressed image.'
        },
        {
          question: 'What types of images work best for age progression?',
          answer: 'Clear, front-facing photos with good lighting work best. Avoid blurry images, side views, or photos with poor lighting. For best results, use a recent photo.'
        },
        {
          question: 'How accurate are the age progression results?',
          answer: 'While our technology provides a good approximation, the accuracy can vary based on image quality and other factors. The results are meant to be a visual aid and not a definitive prediction.'
        },
        {
          question: 'Can I use age progression for any age range?',
          answer: 'Yes, you can progress or regress images for ages between 1 and 100 years. However, results are most accurate for moderate age differences (within 20-30 years of the original image).'
        }
      ]
    },
    {
      id: 'facial-matching',
      title: 'Facial Matching',
      questions: [
        {
          question: 'How does facial matching work?',
          answer: 'Our facial matching technology compares facial features between two images to determine the likelihood of them being the same person. It analyzes key facial landmarks, proportions, and characteristics.'
        },
        {
          question: 'What is a good match score?',
          answer: 'A match score above 80% indicates a high likelihood of the same person. Scores between 60-80% suggest a moderate likelihood, while scores below 60% indicate a low likelihood.'
        },
        {
          question: 'Can I match faces across different ages?',
          answer: 'Yes, our system can match faces across different ages, though accuracy may decrease with larger age differences. For best results, try to use photos taken within a 10-year timeframe.'
        },
        {
          question: 'What affects the accuracy of facial matching?',
          answer: 'Image quality, lighting, angle, facial expressions, and age differences can all affect matching accuracy. For best results, use clear, front-facing photos with good lighting.'
        }
      ]
    },
    {
      id: 'community',
      title: 'Community & Sharing',
      questions: [
        {
          question: 'How do I share my age progression results?',
          answer: 'After generating an age progression result, click the "Share" button. You can then share it on social media, via email, or generate a link to share with others.'
        },
        {
          question: 'Can I control who sees my shared content?',
          answer: 'Yes, you can control your privacy settings in the "Privacy" section of your account settings. You can choose to make your content public, visible to friends only, or private.'
        },
        {
          question: 'How do I report inappropriate content?',
          answer: 'If you encounter inappropriate content, click the "Report" button on the content. You\'ll be prompted to select a reason, and our moderation team will review it promptly.'
        },
        {
          question: 'Can I collaborate with others on the platform?',
          answer: 'Yes, you can collaborate with others by sharing your work and inviting them to contribute. You can also create groups for specific projects or interests.'
        }
      ]
    },
    {
      id: 'privacy',
      title: 'Privacy & Security',
      questions: [
        {
          question: 'How is my data protected?',
          answer: 'We use industry-standard encryption and security measures to protect your data. Your images and personal information are stored securely and are never shared without your consent.'
        },
        {
          question: 'Can I control how my data is used?',
          answer: 'Yes, you have full control over your data through the "Privacy" settings. You can choose what information is visible to others and how your data is used within the platform.'
        },
        {
          question: 'How long do you keep my images?',
          answer: 'We retain your images for as long as your account is active. You can delete individual images or your entire account at any time through your account settings.'
        },
        {
          question: 'Is my information shared with third parties?',
          answer: 'We do not sell your personal information to third parties. We may share anonymized, aggregated data for analytical purposes, but this does not include your personal information.'
        }
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Subscriptions',
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover) and PayPal for payments.'
        },
        {
          question: 'How do I cancel my subscription?',
          answer: 'To cancel your subscription, go to the "Billing" section in your account settings and click on "Cancel Subscription". Your subscription will remain active until the end of your current billing period.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'We offer a 30-day money-back guarantee for new subscriptions. If you\'re not satisfied with our service, contact our support team within 30 days of your purchase for a refund.'
        },
        {
          question: 'How do I update my payment information?',
          answer: 'To update your payment information, go to the "Billing" section in your account settings and click on "Update Payment Method". You can then enter your new payment details.'
        }
      ]
    }
  ];

  const filteredFaqs = searchTerm
    ? faqCategories.flatMap(category => ({
        ...category,
        questions: category.questions.filter(q => 
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })).filter(category => category.questions.length > 0)
    : faqCategories;

  const renderFaq = () => (
    <div className="space-y-6">
      <div className="bg-primary-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-primary-800">Frequently Asked Questions</h3>
        <p className="mt-1 text-sm text-primary-700">
          Find answers to common questions about our platform and features.
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
        <input
          type="text"
          className="input-field pl-10"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {filteredFaqs.length === 0 ? (
        <div className="text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No results found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search term or browse our categories below.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredFaqs.map(category => (
            <div key={category.id} className="card">
              <div className="card-header">
                <h3 className="card-title">{category.title}</h3>
              </div>
              <div className="card-body">
                <div className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <details key={index} className="group">
                      <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 flex-shrink-0">
                          <svg className="h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </summary>
                      <div className="p-4 bg-white rounded-b-lg">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderContact = () => (
    <div className="space-y-6">
      <div className="bg-primary-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-primary-800">Contact Support</h3>
        <p className="mt-1 text-sm text-primary-700">
          Need help? Our support team is here to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Submit a Support Ticket</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmitTicket} className="space-y-4">
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="input-field"
                  value={supportTicket.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="category" className="form-label">Category</label>
                <select
                  id="category"
                  className="input-field"
                  value={supportTicket.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  required
                >
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Issue</option>
                  <option value="billing">Billing Question</option>
                  <option value="feature">Feature Request</option>
                  <option value="bug">Bug Report</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="priority" className="form-label">Priority</label>
                <select
                  id="priority"
                  className="input-field"
                  value={supportTicket.priority}
                  onChange={(e) => handleInputChange('priority', e.target.value)}
                  required
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  id="description"
                  className="input-field"
                  rows={5}
                  value={supportTicket.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
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
                      Submitting...
                    </div>
                  ) : (
                    'Submit Ticket'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Other Ways to Reach Us</h3>
            </div>
            <div className="card-body">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">Email Support</h4>
                    <p className="mt-1 text-sm text-gray-500">
                      support@example.com
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      We typically respond within 24 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">Phone Support</h4>
                    <p className="mt-1 text-sm text-gray-500">
                      +1 (555) 123-4567
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Available Monday-Friday, 9am-5pm EST.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">Live Chat</h4>
                    <p className="mt-1 text-sm text-gray-500">
                      Available for premium users.
                    </p>
                    <button type="button" className="mt-2 btn-secondary text-sm">
                      Start Chat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Common Issues</h3>
            </div>
            <div className="card-body">
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-900">Account Access Issues</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Having trouble logging in? Try resetting your password or clearing your browser cache.
                  </p>
                  <Link to="/help?tab=faq&category=account" className="mt-2 text-primary-600 hover:text-primary-500 text-sm">
                    Learn more →
                  </Link>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-900">Image Processing Problems</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    If your images aren't processing correctly, check our troubleshooting guide.
                  </p>
                  <Link to="/help?tab=faq&category=age-progression" className="mt-2 text-primary-600 hover:text-primary-500 text-sm">
                    Learn more →
                  </Link>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-900">Billing Questions</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Questions about your subscription or payment? Check our billing FAQ.
                  </p>
                  <Link to="/help?tab=faq&category=billing" className="mt-2 text-primary-600 hover:text-primary-500 text-sm">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderResources = () => (
    <div className="space-y-6">
      <div className="bg-primary-50 p-4 rounded-lg">
        <h3 className="text-lg font-medium text-primary-800">Help Resources</h3>
        <p className="mt-1 text-sm text-primary-700">
          Explore our documentation, tutorials, and other resources to get the most out of our platform.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Documentation</h3>
          </div>
          <div className="card-body">
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900">Getting Started Guide</h4>
                <p className="mt-1 text-sm text-gray-500">
                  New to our platform? This guide will help you get up and running quickly.
                </p>
                <button type="button" className="mt-2 btn-secondary text-sm">
                  Read Guide
                </button>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900">User Manual</h4>
                <p className="mt-1 text-sm text-gray-500">
                  Comprehensive documentation covering all features and functionality.
                </p>
                <button type="button" className="mt-2 btn-secondary text-sm">
                  Read Manual
                </button>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900">API Documentation</h4>
                <p className="mt-1 text-sm text-gray-500">
                  Technical documentation for developers integrating with our API.
                </p>
                <button type="button" className="mt-2 btn-secondary text-sm">
                  View API Docs
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Video Tutorials</h3>
          </div>
          <div className="card-body">
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900">Platform Overview</h4>
                <p className="mt-1 text-sm text-gray-500">
                  A quick tour of our platform and its main features.
                </p>
                <button type="button" className="mt-2 btn-secondary text-sm">
                  Watch Video
                </button>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900">Age Progression Tutorial</h4>
                <p className="mt-1 text-sm text-gray-500">
                  Learn how to use our age progression feature effectively.
                </p>
                <button type="button" className="mt-2 btn-secondary text-sm">
                  Watch Video
                </button>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-900">Facial Matching Tutorial</h4>
                <p className="mt-1 text-sm text-gray-500">
                  Master our facial matching technology with this detailed tutorial.
                </p>
                <button type="button" className="mt-2 btn-secondary text-sm">
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Community Resources</h3>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900">Community Forum</h4>
              <p className="mt-1 text-sm text-gray-500">
                Connect with other users, share tips, and get help from the community.
              </p>
              <button type="button" className="mt-2 btn-secondary text-sm">
                Visit Forum
              </button>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900">Blog</h4>
              <p className="mt-1 text-sm text-gray-500">
                Read articles about our technology, use cases, and platform updates.
              </p>
              <button type="button" className="mt-2 btn-secondary text-sm">
                Read Blog
              </button>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-900">Webinars</h4>
              <p className="mt-1 text-sm text-gray-500">
                Join live webinars to learn from our experts and ask questions.
              </p>
              <button type="button" className="mt-2 btn-secondary text-sm">
                View Schedule
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Downloadable Resources</h3>
        </div>
        <div className="card-body">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Resource</th>
                  <th>Description</th>
                  <th>Format</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Quick Start Guide</td>
                  <td>A concise guide to get started with our platform</td>
                  <td>PDF</td>
                  <td>
                    <button type="button" className="text-primary-600 hover:text-primary-500 text-sm">
                      Download
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>User Manual</td>
                  <td>Complete documentation of all features</td>
                  <td>PDF</td>
                  <td>
                    <button type="button" className="text-primary-600 hover:text-primary-500 text-sm">
                      Download
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>API Reference</td>
                  <td>Technical documentation for API integration</td>
                  <td>PDF</td>
                  <td>
                    <button type="button" className="text-primary-600 hover:text-primary-500 text-sm">
                      Download
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Best Practices</td>
                  <td>Guidelines for optimal results</td>
                  <td>PDF</td>
                  <td>
                    <button type="button" className="text-primary-600 hover:text-primary-500 text-sm">
                      Download
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'faq':
        return renderFaq();
      case 'contact':
        return renderContact();
      case 'resources':
        return renderResources();
      default:
        return renderFaq();
    }
  };

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Help Center</h1>
        <p className="page-description">
          Find answers to your questions and get support for our platform.
        </p>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => handleTabChange('faq')}
                className={`${
                  activeTab === 'faq'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                aria-current={activeTab === 'faq' ? 'page' : undefined}
              >
                FAQ
              </button>
              <button
                onClick={() => handleTabChange('contact')}
                className={`${
                  activeTab === 'contact'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                aria-current={activeTab === 'contact' ? 'page' : undefined}
              >
                Contact Support
              </button>
              <button
                onClick={() => handleTabChange('resources')}
                className={`${
                  activeTab === 'resources'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                aria-current={activeTab === 'resources' ? 'page' : undefined}
              >
                Resources
              </button>
            </nav>
          </div>
        </div>
        <div className="card-body">
          {renderActiveTab()}
        </div>
      </div>
    </div>
  );
} 