export default function Footer() {
  return (
    <div>
      <footer className="relative bg-gray-600 text-white pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold ">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 ">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter" />
                </button>
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square" />
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-dribbble" />
                </button>
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github" />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="font-semibold block pb-2 text-sm"
                        
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block pb-2 text-sm"
                        
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block pb-2 text-sm"
                        
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block pb-2 text-sm"
                        
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="font-semibold block pb-2 text-sm"
                        
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block pb-2 text-sm"
                        
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block pb-2 text-sm"
                        
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-semibold block pb-2 text-sm"
                        
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 " />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm font-semibold py-1">
                Copyright © <span id="get-current-year">2023</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
