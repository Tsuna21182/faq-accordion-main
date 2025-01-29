type AccordionProps = {
  title: string;
  description: string;
};

import { useState } from "react";

const Accordion = ({ title, description }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:w-xl">
      <div className="flex items-center justify-between mt-10">
        <h3 className="text-Dark-purple mr-2 font-bold hover:text-Bright-Purple cursor-pointer">
          {title}
        </h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex items-center justify-center w-10 h-10"
        >
          <img
            src={isOpen ? "/images/icon-minus.svg" : "/images/icon-plus.svg"}
            alt="toggle icon"
            className="w-6 h-6"
          />
        </button>
      </div>
      <p
        className={`transition-all ${
          isOpen ? "block" : "hidden"
        } mt-5 text-Grayish-purple`}
      >
        {description}
      </p>
    </div>
  );
};

export default Accordion;
