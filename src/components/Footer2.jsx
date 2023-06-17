import { Link } from "react-router-dom";

const Footer2 = () => {
    return (
      <footer className="bg-white">
        <div
          className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-zinc-900">
                www.bledplus.com
              </div>
      
              <p className="mt-4 max-w-xs text-gray-500">
                We share videos legally but we will be running ads.
                This app is not designed for smartphones, you will have a better experience on large screens like on a PC.
              </p>
      
              <ul className="mt-8 flex gap-6">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>
      
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
      
                <li>
                  <a
                    href="https://github.com/nazimboudeffa/watchmovies-vitejs"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">GitHub</span>
      
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
      
              </ul>
            </div>
      
            <div
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
            >
              <div>
                <p className="font-medium text-gray-900">Services</p>
      
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link to="/movies" className="text-gray-700 transition hover:opacity-75">
                      Movies
                    </Link>
                  </li>
      
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Series
                    </a>
                  </li>
      
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      TV Shows
                    </a>
                  </li>
      
                </ul>
              </div>
      
              <div>
                <p className="font-medium text-gray-900">Company</p>
      
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      About
                    </a>
                  </li>
      
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Blog
                    </a>
                  </li>
      
                </ul>
              </div>
      
              <div>
                <p className="font-medium text-gray-900">Helpful Links</p>
      
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Contact
                    </a>
                  </li>
      
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      FAQs
                    </a>
                  </li>
      
                </ul>
              </div>
      
              <div>
                <p className="font-medium text-gray-900">Legal</p>
      
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Terms & Conditions
                    </a>
                  </li>
      
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Privacy Policy
                    </a>
                  </li>
      
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                      Cookies
                    </a>
                  </li>
      
                </ul>
              </div>
            </div>
          </div>
      
          <p className="text-xs text-gray-500">
            &copy; 2022. Company Name. All rights reserved.
          </p>
        </div>
      </footer>
    );
}

export default Footer2