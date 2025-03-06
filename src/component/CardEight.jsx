
const CardEight = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 text-white bg-black gap-6">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2">
        <img 
          src="/card14.jpg" 
          alt="Customer Support" 
          width={500} 
          height={300} 
            />
      </div>
      
      {/* Right Side - Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold mb-2">Expert Customer Care</h2>
        <p className=" mb-4 text-1xl">
          Need some help with your blog? Reach out to our Customer Support Team via email or live chat. 
          They can help you find the perfect blog post layout, help you find your RSS feed, 
          or help you tackle any other blog-related challenge.
        </p>
        
        <ul className="text-lg font-medium">
          <li className="border-b-2 w-max uppercase">Visit Help Center</li>
          <li className="border-b-2 w-max uppercase">Contact Support</li>
          <li className="border-b-2 w-max uppercase">Webinars</li>
          <li className="border-b-2 w-max uppercase">Hire an Expert</li>
        </ul>
      </div>
    </div>
  );
}

export default CardEight; 