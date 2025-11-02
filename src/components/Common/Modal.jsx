// Modal.jsx
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
// import "./Modal.css";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (event) => event.key === "Escape" && onClose();
    if (isOpen) document.body.style.overflow = "hidden"; // prevent background scroll
    else document.body.style.overflow = "auto";
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={(e) => e.target.classList.contains("modal-backdrop") && onClose()}>
      <div className="modal-container" role="dialog" aria-modal="true">
        <div className="modal-header">
          <div className="modal-title">{title}</div>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
