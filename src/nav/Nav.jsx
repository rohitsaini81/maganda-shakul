import React from 'react';
import './nav.css'
export default function Nav() {
  const [scrollPercentage, setScrollPercentage] = React.useState(0);
  const [isAtBottom, setIsAtBottom] = React.useState(false);
 

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const scrollPercentage = (currentScroll / scrollHeight) * 100;
   setIsAtBottom(currentScroll === scrollHeight)

    setScrollPercentage(scrollPercentage);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fontcl = {
    color: isAtBottom ? 'transparent' :`hsl(${scrollPercentage}, 50%, 50%)`, 
  };
  const navbg = {backgroundColor: isAtBottom ? 'transparent' :`rgba(255, 250, 250, 0.277)`}


  return (
    <div className="navbar" style={navbg}>
      <a href="#home"><div className="text-wrapper" style={fontcl}>Maganda</div></a>
      <div className="group">
        <a href='#about'><div className="text-wrapper-2 my-btn">About me</div></a>
        <a href='#section_3'><div className="text-wrapper-2 my-btn">Gallery</div></a>
        <a href='#contacts'><div className="text-wrapper-2 my-btn">Contact me</div></a>
        <a href='/blog-post'><div className="text-wrapper-2 my-btn">Blogs</div></a>
      </div>
    </div>
  );
}

