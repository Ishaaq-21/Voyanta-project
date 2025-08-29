import React, { JSX } from "react";

type MainButtonProps = {
  buttonName: string;
};

const MainButton = ({ buttonName }: MainButtonProps): JSX.Element => {
  return (
    <button
      className="
        relative m-5 inline-block h-[2.6em] w-[6em] cursor-pointer overflow-hidden
        rounded-md border-2 border-[#fbbf24] text-[17px] leading-[2.5em] text-[#fbbf24]
        font-semibold
        z-10

        transition-colors hover:text-white
        
        before:absolute before:h-[200px] before:w-[150px] before:rounded-full
        before:bg-[#fbbf24] before:content-['']
        
        before:left-full before:top-full before:transition-all before:duration-300
        
        before:-z-10
        
        hover:before:-left-[30px] hover:before:-top-[30px]
      "
    >
      {buttonName}
    </button>
  );
};

export default MainButton;
