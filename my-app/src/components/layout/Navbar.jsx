import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../context/AuthContext';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Search', href: '/search' },
  { name: 'Community', href: '/community' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Disclosure as="nav" className=" w-full bg-white shadow">
      {({ open }) => (
        <>
          <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/" className="text-xl font-bold text-primary-600">
                    Missing Children Platform
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-primary-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {isAuthenticated ? (
                  <div className="flex items-center space-x-4">
                    <Link
                      to="/dashboard"
                      className="btn-secondary px-4 py-2"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/profile"
                      className="btn-primary px-4 py-2"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={logout}
                      className="btn-danger px-4 py-2"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-4">
                    <Link
                      to="/login"
                      className="btn-secondary px-4 py-2"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="btn-primary px-4 py-2"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-primary-600"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              {isAuthenticated ? (
                <div className="space-y-1">
                  <Disclosure.Button
                    as={Link}
                    to="/dashboard"
                    className="block w-full px-3 py-2 text-left text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-primary-600"
                  >
                    Dashboard
                  </Disclosure.Button>
                  <Disclosure.Button
                    as={Link}
                    to="/profile"
                    className="block w-full px-3 py-2 text-left text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-primary-600"
                  >
                    Profile
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="button"
                    onClick={logout}
                    className="block w-full px-3 py-2 text-left text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-primary-600"
                  >
                    Logout
                  </Disclosure.Button>
                </div>
              ) : (
                <div className="space-y-1">
                  <Disclosure.Button
                    as={Link}
                    to="/login"
                    className="block w-full px-3 py-2 text-left text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-primary-600"
                  >
                    Login
                  </Disclosure.Button>
                  <Disclosure.Button
                    as={Link}
                    to="/register"
                    className="block w-full px-3 py-2 text-left text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-primary-600"
                  >
                    Register
                  </Disclosure.Button>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
} 