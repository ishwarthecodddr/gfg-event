import { useState } from 'react'

function BuggyPage() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  return (
    <div className="w-full bg-white text-gray-800 font-sans leading-relaxed">
      <nav className="bg-gray-800">
        <ul className="flex list-none p-0">
          <li className="p-4">
            <a href="#" className="text-white no-underline escaping-link" data-bug-id="bug-1">Home</a>
          </li>
          <li className="p-4">
            <a href="#" className="text-white no-underline hover:rotate-180 inline-block transition-transform" data-bug-id="bug-2">About</a>
          </li>
          <li className="p-4">
            <a href="#" className="text-white no-underline hover:opacity-0 transition-opacity" data-bug-id="bug-3">Services</a>
          </li>
          <li className="p-4">
            <a href="#" className="text-white no-underline hover:animate-rainbow" data-bug-id="bug-4">Contact</a>
          </li>
          <li className="p-4 opacity-[0.01] hover:opacity-100" data-bug-id="bug-5">
            <a href="#" className="text-white no-underline">Hidden Menu</a>
          </li>
        </ul>
      </nav>
      
      <main className="p-8">
        <section className="text-center py-12 px-4 bg-gray-100 mb-8">
          <h1 
            className="hover:animate-jump inline-block cursor-pointer" 
            data-bug-id="bug-6"
          >
            Welcome to Our Website
          </h1>
          <p 
            className="hover:animate-rotate inline-block cursor-pointer" 
            data-bug-id="bug-7"
          >
            We provide the best services for your needs
          </p>
          <button 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:ml-[calc(100%-150px)] relative transition-all duration-200"
            data-bug-id="bug-8"
          >
            Learn More
          </button>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div 
              className="border border-gray-300 rounded-lg p-6 hover:scale-[3] hover:z-50 transition-transform cursor-pointer"
              data-bug-id="bug-9"
            >
              <h3 className="text-xl font-bold">Feature 1</h3>
              <p>This card zooms when you hover over it</p>
            </div>
            <div 
              className="border border-gray-300 rounded-lg p-6 invisible-content"
              data-bug-id="bug-10"
            >
              <h3 className="text-xl font-bold">Feature 2</h3>
              <p>This text is impossible to see without highlighting</p>
            </div>
            <div 
              className="border border-gray-300 rounded-lg p-6"
              data-bug-id="bug-11"
            >
              <h3 className="text-xl font-bold whitespace-nowrap overflow-hidden animate-typing w-fit">Feature 3</h3>
              <p>This keeps erasing and retyping</p>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
          <form onSubmit={(e) => e.preventDefault()} className="max-w-xl mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2">Name:</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-3 border border-gray-300 rounded uppercase-input"
                data-bug-id="bug-12"
                value={formValues.name}
                onChange={(e) => setFormValues({...formValues, name: e.target.value})}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2">Email:</label>
              <input 
                type="email" 
                id="email"
                className="w-full p-3 border border-gray-300 rounded reverse-input"
                data-bug-id="bug-13"
                value={formValues.email}
                onChange={(e) => setFormValues({...formValues, email: e.target.value})}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2">Message:</label>
              <textarea 
                id="message"
                className="w-full p-3 border border-gray-300 rounded focus:h-[300px] transition-all"
                data-bug-id="bug-14"
                value={formValues.message}
                onChange={(e) => setFormValues({...formValues, message: e.target.value})}
              />
            </div>
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-500 text-white rounded relative overflow-hidden submit-button"
              data-bug-id="bug-15"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
      
      <footer className="bg-gray-800 text-white text-center p-4 mt-12">
        <p>© 2025 Bug Hunter Game developed by Ishwar</p>
      </footer>
    </div>
  )
}

export default BuggyPage