import React, { useState, useEffect } from "react";

const ResponsiveImage = ({ src, alt }) => {
  const [vh, setVh] = useState("100vh");

  useEffect(() => {
    const updateVh = () => {
      // Use the actual viewport height
      let newVh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${newVh}px`);
      setVh(`calc(var(--vh, 1vh) * 100)`);
    };

    // Update on mount
    updateVh();

    // Update on resize and orientation change
    window.addEventListener("resize", updateVh);
    window.addEventListener("orientationchange", updateVh);

    return () => {
      window.removeEventListener("resize", updateVh);
      window.removeEventListener("orientationchange", updateVh);
    };
  }, []);

  return (
    <div className="w-full" style={{ height: vh }}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default ResponsiveImage;
