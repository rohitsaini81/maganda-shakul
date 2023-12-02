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

  const backgroundImageStyle = {
    color: isAtBottom ? 'transparent' :`hsl(${scrollPercentage}, 50%, 50%)`, };


  return (
    <div className="navbar">
      <div className="text-wrapper" style={backgroundImageStyle}>Maganda</div>
      <div className="group">
        <a href='#about'><div className="text-wrapper-2 my-btn">About me</div></a>
        <a href='#services'><div className="text-wrapper-2 my-btn">Services</div></a>
        <a href='#contacts'><div className="text-wrapper-2 my-btn">Contact me</div></a>
      </div>
    </div>
  );
}
