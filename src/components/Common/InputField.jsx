import React from 'react'

function InputField({ type, placeholder, value, onChange, className, icon, iconPosition }) {
    const wrapperStyles = {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '12px',
    };

    const inputStyles = {
        height: '40px',
        background: '#EEF1F8 0% 0% no-repeat padding-box',
        borderRadius: '8px',
        border: 'none',
        padding: '11px 16px',
        fontSize: '14px',
        font: 'normal normal 500 14px / 18px "Montserrat", sans-serif',
        letterSpacing: '0px',
        color: '#7A7D7E',
        width: '100%',
        boxSizing: 'border-box',
    };

    const iconStyles = {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        color: '#7A7D7E', // Icon color to match placeholder
    };

    if (icon) {
        if (iconPosition === 'left') {
            inputStyles.paddingLeft = '40px';
            iconStyles.left = '16px';
        } else { // default to right
            inputStyles.paddingRight = '40px';
            iconStyles.right = '16px';
        }
    }

    return (
        <div style={wrapperStyles} className={`${className || ''}-wrapper`}>
            {icon && <span style={iconStyles}>{icon}</span>}
            <input type={type} className={className} placeholder={placeholder} value={value} onChange={onChange} style={inputStyles} />
        </div>
    )
}

export default InputField