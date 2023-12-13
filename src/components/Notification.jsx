import React, { useState } from "react";

function Notification() {
  const [show, setShow] = useState(false);

  const showAlert = () => {
    setShow(true);
  };

  const hideAlert = () => {
    setShow(false);
  };
  return (
    <>
      <div className="p-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={showAlert}
        >
          Show Alert
        </button>
        {show && (
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mt-4">
            <div className="flex items-center justify-between">
              <p>This is an alert!</p>
              <button
                className="text-sm text-blue-500 focus:outline-none"
                onClick={hideAlert}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Notification;
