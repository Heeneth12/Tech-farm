import React, { useState } from "react";

const Modal = ({ modalIsOpen, onClose }) => {
  const [isOpen, setIsOpen] = useState(modalIsOpen);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-container bg-white w-1/2 mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">Modal Header</p>
                <button onClick={closeModal} className="modal-close">
                  X
                </button>
              </div>
              <p>Modal content goes here.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
