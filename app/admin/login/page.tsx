'use client';

import { useActionState } from 'react';
import { login } from './actions';

const initialState = {
  message: '',
};

export default function LoginPage() {
  const [state, formAction] = useActionState(login, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F0F0F]">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-[#1A1A1A]">Admin Login</h1>
          <p className="text-gray-500 mt-2">Please sign in to continue</p>
        </div>

        <form action={formAction} className="space-y-6">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Username</label>
            <input 
              type="text" 
              name="username" 
              required
              className="w-full p-4 bg-gray-50 border border-black/10 focus:border-[#D4AF37] outline-none transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-500 mb-2">Password</label>
            <input 
              type="password" 
              name="password" 
              required
              className="w-full p-4 bg-gray-50 border border-black/10 focus:border-[#D4AF37] outline-none transition-colors"
            />
          </div>

          {state?.message && (
            <div className="p-4 bg-red-50 text-red-600 text-sm text-center">
              {state.message}
            </div>
          )}

          <button 
            type="submit" 
            className="w-full py-4 bg-[#D4AF37] text-white font-bold uppercase tracking-widest hover:bg-[#b8952b] transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
