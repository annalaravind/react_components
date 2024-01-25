import React, { useState } from 'react';
import './DropDown.css';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const DropDown = () => {
  const [drop, setDrop] = useState(false);

  const onDropToggleHandler = () => {
    setDrop(!drop);
  };

  return (
    <>
      <div className="dropdown">
        <div>click to view...</div>
        {drop ? (
          <div onClick={onDropToggleHandler}>
            <IoIosArrowDown />
          </div>
        ) : (
          <div onClick={onDropToggleHandler}>
            <IoIosArrowUp />
          </div>
        )}
      </div>

      {drop && (
        <>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            officiis omnis at sunt quisquam deserunt! Velit, eligendi explicabo
            cupiditate amet ad laborum enim voluptatem assumenda non, quam ea,
            sequi deserunt? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Non consectetur alias sunt quidem sit voluptatibus quam,
            doloremque ipsam numquam repellat porro dolor voluptate dignissimos
            ipsum soluta architecto cumque, harum nostrum!
          </div>
        </>
      )}
    </>
  );
};

export default DropDown;

// import React, { useState } from 'react';
// import './DropDown.css';
// import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

// const DropDown = () => {
//   const [drop, setDrop] = useState(false);

//   const onDropToggleHandler = () => {
//     setDrop(!drop);
//   };

//   return (
//     <>
//       <div
//         className={`dropdown ${drop ? 'active' : ''}`}
//         onClick={onDropToggleHandler}
//       >
//         <div>click to view</div>
//         <div>{drop ? <IoIosArrowDown /> : <IoIosArrowUp />}</div>
//       </div>

//       <div className={`content ${drop ? 'active' : ''}`}>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
//         doloribus sequi modi corporis soluta sint consequuntur beatae provident
//         molestias distinctio expedita, reprehenderit suscipit blanditiis, atque
//         odio praesentium voluptas, nemo optio?
//       </div>
//     </>
//   );
// };

// export default DropDown;
