import React from 'react';

interface PopoverProps {
  title: string;
  children: React.ReactNode
  isOpen: boolean;
  onClose: () => void;
}

const Popover: React.FC<PopoverProps> = ({ title, children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white w-3/5 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-4">{children}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popover;
