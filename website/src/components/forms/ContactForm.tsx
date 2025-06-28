import React from 'react'
import { Input } from '@/components/ui/input'

export function ContactForm() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <form className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Input
              type="text"
              placeholder="First name"
              name="firstName"
              required
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Last name"
              name="lastName"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Input
              type="email"
              placeholder="E-mail"
              name="email"
              required
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Company name"
              name="company"
            />
          </div>
        </div>
        
        <div className="pt-4">
          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
