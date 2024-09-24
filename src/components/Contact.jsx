import React from 'react'

const Contact = () => {
  return (
   <>
   <h1 className="text-3xl font-bold mb-8 text-center">Contact</h1>

<form className="mx-auto max-w-md p-4">
  <div className="bg-white shadow-lg rounded-lg p-6">
    <div className="mb-4">
      <label htmlFor="exampleInputEmail1" className="block text-sm font-medium text-gray-700">Email</label>
      <input 
        type="email" 
        id="exampleInputEmail1" 
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" className="mt-2 text-sm text-gray-500">We'll never share your email with anyone else.</div>
    </div>
    
    <div className="mb-4">
      <label htmlFor="exampleInputPassword1" className="block text-sm font-medium text-gray-700">Password</label>
      <input 
        type="password" 
        id="exampleInputPassword1" 
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
      />
    </div>
    
    <div className="mb-4 flex items-center">
      <input 
        type="checkbox" 
        id="exampleCheck1" 
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" 
      />
      <label htmlFor="exampleCheck1" className="ml-2 block text-sm text-gray-900">Check me out</label>
    </div>
    
    <button 
      type="submit" 
      className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Submit
    </button>
  </div>
</form>

<div className="flex flex-wrap gap-4 justify-center mt-8">
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src="https://images.pexels.com/photos/1082343/pexels-photo-1082343.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Free Plan" className="w-full h-48 object-cover"/>
    <div className="p-6">
      <h5 className="text-xl font-bold mb-2">Free</h5>
      <h4 className="text-lg font-semibold mb-4">Price: $0 per month</h4>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Pizzas per Month: 1 pizza</li>
        <li>Toppings: Basic toppings only</li>
        <li>Individuals who have minimal pizza needs.</li>
        <li>Customers who want to try out the service without any cost.</li>
      </ul>
      <p className="text-gray-600"><small>—</small></p>
    </div>
  </div>

  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src="https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Pro Plan" className="w-full h-48 object-cover"/>
    <div className="p-6">
      <h5 className="text-xl font-bold mb-2">Pro</h5>
      <h4 className="text-lg font-semibold mb-4">Price: $15 per month</h4>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Pizzas per Month: 5 pizzas</li>
        <li>Toppings: Access to all toppings</li>
        <li>Support: Priority email support</li>
        <li>Small families or groups who consume pizzas regularly.</li>
        <li>Customers who want a wider variety of toppings.</li>
        <li>Users who require more responsive support compared to the Free plan.</li>
      </ul>
      <p className="text-gray-600"><small>—</small></p>
    </div>
  </div>

  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src="https://images.pexels.com/photos/280453/pexels-photo-280453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Enterprise Plan" className="w-full h-48 object-cover"/>
    <div className="p-6">
      <h5 className="text-xl font-bold mb-2">Enterprise</h5>
      <h4 className="text-lg font-semibold mb-4">Price: $29 per month</h4>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Pizzas per Month: Unlimited pizzas</li>
        <li>Toppings: Access to all toppings, including premium toppings</li>
        <li>Support: 24/7 phone support</li>
        <li>Large families or pizza enthusiasts who want unlimited access.</li>
        <li>Businesses or events that require frequent pizza orders.</li>
        <li>Customers who need premium toppings and around-the-clock support.</li>
        <li>Premium Toppings: Includes all available toppings plus premium options like truffle oil, prosciutto, gourmet cheeses, etc.</li>
      </ul>
      <p className="text-gray-600"><small>For Legends Only</small></p>
    </div>
  </div>
</div>

   </>
  )
}

export default Contact
