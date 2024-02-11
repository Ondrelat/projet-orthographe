import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div style={overlayStyle}>
            <div style={modalStyle}>
                <button onClick={onClose} style={closeButtonStyle}>X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;

const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000
};

const modalStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000
};

const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px'
};
