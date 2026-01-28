import React, { useState } from "react";

const Fan = () => {
  const [isFanOn, setIsFanOn] = useState(false);

  const toggleFan = () => {
    setIsFanOn(!isFanOn);
  };
  return (
    <div className="flex justify-center items-center">
      {console.log(isFanOn)}

      {
        isFanOn ? (
          <img className="w-100 h-100 "
            src="https://cdn.dribbble.com/userupload/26856603/file/original-0c27e4285bfeda0f6dd410d09c982323.gif"
            alt=""
          />
        ) : (
          <img className="w-100 h-100 "
            src="https://i.ibb.co/Zpd4qZs5/fantest.jpg"
            alt=""
          />
        )
      }

      <button onClick={toggleFan}>ON/OFF</button>
    </div>
  );
};

export default Fan;
