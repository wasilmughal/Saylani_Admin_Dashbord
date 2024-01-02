import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export function Login() {



    const nav = useNavigate();

    // State for email and password
    const [email, setEmail] = useState('ADMIN@gmail.com');
    const [password, setPassword] = useState('adminadmin');
  
    const handleSubmission = () => {
      // Perform your submission logic here
  
      // After successful submission, navigate to /main
      nav('/AddPost');
  
      // Reset the form fields
      setEmail('');
      setPassword('');
    };
  

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
          <div className="absolute inset-0">
            <img
              className="h-screen w-full rounded-md object-cover object-top"
              src="https://play-lh.googleusercontent.com/dGp-bVuxKn-J-v744tzYnruh0bUdslcQJ43PPQEXxt4vjsHr3NPB_pxECO1mp57dWjY"
              alt=""
            />
          </div>
          {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div> */}
          
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-[#0369a1] sm:text-4xl">Sign in</h2>
            <p className="mt-2 text-sm text-[#0369a1]">
              Saylani Dhukhi Dilon KA Sahara 
             
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      value={email}

                      onChange={(e) => setEmail(e.target.value)}

                    ></input>
                  </div>
                </div>
                <div>
                
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      value={password}

                      onChange={(e) => setPassword(e.target.value)}

                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handleSubmission}
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Get started 
                  </button>
                </div>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </section>
  )
}
