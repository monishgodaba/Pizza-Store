function About() {
    return (
        <>
            <div className="min-h-screen flex flex-col pt-16">
                <main className="flex-1 container mx-auto px-4 py-8">
                    <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
                    
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
                        <p className="text-lg">Welcome to Pizza Store, your number one source for the best pizzas in town.</p>
                    </div>
                    
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
                        <p>
                            Founded in [1990], Pizza Store was born out of a genuine love for crafting the perfect pizza. Our founder, [Owner's Name], started with a simple vision: to create a place where friends and family could gather and enjoy exceptional, handcrafted pizzas made from the finest ingredients. It all began in a small, cozy kitchen where [Owner's Name]'s passion for pizza-making flourished. With each pizza, a new recipe was perfected, blending traditional techniques with innovative flavors.
  
                            As word spread, our humble pizzeria quickly became a local favorite, known for its warm, welcoming atmosphere and dedication to quality. We've grown over the years, but our commitment to excellence remains unchanged. Every pizza we serve is a testament to our journey—a journey filled with hard work, creativity, and an unwavering commitment to our customers. Today, Pizza Store stands as a beloved institution in [Community Name], where our story continues to unfold with every slice shared.
                        </p>
                    </div>
                    
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                        <p>At Pizza Store, our mission is to bring joy to our community through delicious, made-to-order pizzas crafted with the finest ingredients.</p>
                    </div>
  
                    <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
                    <div className="flex justify-between gap-4 mb-6">
                        <div className="text-center">
                            <img className="w-48 h-48 object-cover rounded-full mx-auto mb-2" src="https://images.pexels.com/photos/3824771/pexels-photo-3824771.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Owner" />
                            <p><strong>[Micheal Alfredo]</strong>: Founder and Head Chef</p>
                        </div>
                        <div className="text-center">
                            <img className="w-48 h-48 object-cover rounded-full mx-auto mb-2" src="https://images.pexels.com/photos/3116381/pexels-photo-3116381.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Manager" />
                            <p><strong>[Mr. Brade Rodger]</strong>: Manager</p>
                        </div>
                    </div>
  
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Quality Ingredients</h2>
                        <p>We believe that great pizza starts with great ingredients. That's why we source our produce from local farms and use only the finest cheeses and meats.</p>
                    </div>
  
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Community Focus</h2>
                        <p>We're proud to be part of [Community Name] and actively support local events and charities. Our commitment to sustainability means we use eco-friendly packaging and practices.</p>
                    </div>
  
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Hear from Our Customers</h2>
                        <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                            "Best pizza in town! The crust is perfection." - [jack cronos]
                        </blockquote>
                        <blockquote className="border-l-4 border-gray-300 pl-4 italic mt-4">
                            "I love the variety of toppings. Always fresh and delicious!" - [Alizebeth Marteiz]
                        </blockquote>
                    </div>
  
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
                        <p>Visit us at [Park Avenue Street], call us at [+91 9701901556], or connect with us on social media:</p>
                        <div className="flex gap-4 mt-2">
                            <a className="text-blue-500 hover:underline" href="https://facebook.com">Facebook</a>
                            <a className="text-blue-500 hover:underline" href="https://twitter.com">Twitter</a>
                            <a className="text-blue-500 hover:underline" href="https://instagram.com">Instagram</a>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
  }
  
  export default About;
  