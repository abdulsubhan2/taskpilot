function Button({ onClick, label, type, className='' }) {
  const buttonStyle = {
    height: '40px',
    background: ' #5285EC 0% 0% no-repeat padding-box',
    borderRadius: ' 8px',
    opacity: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    font: 'normal normal 500 14px / 18px "Montserrat", sans-serif',
    letterSpacing: '0px',
    color: ' #FFFFFF',
    opacity: 1,
    border: 'none',
    transition: 'transform 120ms ease, box-shadow 160ms ease, background-color 160ms ease'
  };

  return (
    <button type={type} onClick={onClick} className={`${className} button-primary`} style={buttonStyle}>{label}</button>
  )
}

export default Button