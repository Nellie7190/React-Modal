import React from 'react'

export const Modal = ({ open, children, onClose }) => {
    const MODAL_STYLES = {
        textAlign: 'center',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFF',
        padding: '50px',
        zIndex: 1000
    }

    const OVERLAY_STYLES = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .6)',
        zIndex: 1000
    }

    if (!open) return null

    return (
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                This is my very Fancy Modal
                <button onClick={onClose}>Close Modal</button>
                {children}
            </div>
        </>
    )
}
