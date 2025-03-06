const CardSix = () =>  {
    const cards = [
      {
        id: 1,
        image: "/card13.jpg",
        heading: "Stand out with SEO",
        description: "Improve search result ranking by optimizing your blog post titles and descriptions with built-in SEO tools."
      },
      {
        id: 2,
        image: "/card12.jpg",
        heading: "Drive engagement",
        description: "Increase traffic to your blog with Squarespace Email Campaigns and connected social media accounts. Enable commenting through Squarespace or Disqus."
      }
    ];
  
    return (
      <div className="flex flex-col items-center text-center p-8">
        {/* Section Heading */}
        <h2 className="text-5xl font-bold mb-4">Promote your blog</h2>
        <p className="text-lg font-medium mb-8 max-w-lg">
        Drive blog traffic with built-in SEO, Email Campaigns, and connected social media accounts.
        </p>
  
        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {cards.map((card) => (
            <div key={card.id} className="p-4 flex flex-col items-start">
              <img 
                src={card.image} 
                alt={card.heading} 
                className="w-full h-72 object-center mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{card.heading}</h3>
              <p className="font-medium text-start">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  export default CardSix;  