import { useState, useEffect } from 'react';

export default function CursorTrail() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  // Function to update the position of the cursor
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    // Ensure the dot doesn't go outside the screen
    const x = Math.min(clientX, window.innerWidth - 8);  // Prevent dot from going beyond the right edge
    const y = Math.min(clientY, window.innerHeight - 8); // Prevent dot from going beyond the bottom edge

    setPosition({ x, y });
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false); // Hide the dot if the mouse leaves the window
  };

  // Add event listeners for mouse movement and leaving the window
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative  bg-gray-100">
      {/* Only show the dot when isVisible is true */}
      {isVisible && (
        <div
          className="absolute bg-blue-500 rounded-full w-4 h-4 z-10"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transition: 'transform 0.05s ease-out',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
    </div>
  );
}
