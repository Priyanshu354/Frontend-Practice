import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, onClose, children, triggerRef }) => {
  const modalRef = useRef(null);
  const modalroot = document.getElementById('modal-root');

  useEffect(() => {
    if (isOpen) {
      const focusableElements = modalRef.current.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length) {
        focusableElements[0].focus();
      }

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();

        if (e.key === 'Tab' && focusableElements.length > 0) {
          const first = focusableElements[0];
          const last = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        if (triggerRef?.current) {
          triggerRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="bg-white p-6 rounded shadow max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    modalroot
  );
};

export default Modal;
