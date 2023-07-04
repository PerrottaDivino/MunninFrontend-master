import React from 'react'
import Wrapper from '../components/Wrapper';

const login = () => {
  return (
    <Wrapper>
                <div class="z -10 flex items-center justify-center h-screen">
            <div class="max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden">
                <div class="px-6 py-4">
                <h2 class="text-xl 
                relative z-10 inline-block bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300
                font-bold mb-2">Sign in to your account</h2>
                <p class="text-gray-600">Please enter your credentials below.</p>
                </div>
                <div class="px-6 py-4">
                <form>
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username/E-Mail:
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                    />
                      
                    </div>
                    <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                       Password: 
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                    </div>
                    <div class="flex items-center justify-between">
                    <button
                        class="bg-gradient-to-r from-orange-500 to-orange-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-xl"
                        type="button"
                    >
                        Sign In
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm 
                    relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300
                     mb-2
                    " href="#">
                        Forgot your password?
                    </a>
                    </div>
                </form>
                </div>
            </div>
            </div>
    </Wrapper>
  );
};

export default login
