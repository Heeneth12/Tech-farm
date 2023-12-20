import React, { useState } from "react";

function Notification(props) {
  const [show, setShow] = useState(true);

  const hideAlert = () => {
    setShow(false);
  };
  return (
    <>
      {show && (
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mt-4">
          <div className="flex items-center justify-between">
            <p>{props.message}</p>
            <button
              className="text-sm text-blue-500 focus:outline-none"
              onClick={hideAlert}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Notification;
