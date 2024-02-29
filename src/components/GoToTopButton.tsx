import { useEffect, useState } from "react";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`
        ${isVisible ? "block" : "hidden"} 
        fixed bottom-6 left-6 z-50 h-10 w-10 animate-bounce rounded-full border-2 border-amber-600 bg-black text-3xl`}
      onClick={handleScrollUp}
    >
      <span className="text-amber-500">&#8593;</span>
    </button>
  );
};

export default GoToTopButton;
