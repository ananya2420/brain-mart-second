
export async function GET() {

    const footerImages = [
      {
        id: 1,
        src: "/images/facebook.png", 
        alt: "Facebook",
        url: "https://facebook.com",
      },
      {
        id: 2,
        src: "/images/twitter.png", 
        alt: "Twitter",
        url: "https://twitter.com",
      },
      {
        id: 3,
        src: "/images/linkedin.png", 
        alt: "LinkedIn",
        url: "https://linkedin.com",
      },
      {
        id: 4,
        src: "/images/instagram.png", 
        alt: "Instagram",
        url: "https://instagram.com",
      },
      
    ];
  
    return new Response(JSON.stringify(footerImages), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  