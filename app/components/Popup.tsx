// app/components/Popup.tsx

import React from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  buttonText?: string;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, title, buttonText, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80" onClick={onClose}>
      <div className="bg-[#151720] p-6 rounded-lg w-11/12 sm:w-1/2 md:w-1/3">
        {title && <h2 className="text-2xl text-white mb-4">{title}</h2>}
        <div>{children}</div>
        <button onClick={onClose} className="mt-4 text-white bg-[#F88725] py-2 px-4 rounded-lg">{buttonText}</button>
      </div>
    </div>
  );
};

export default Popup;