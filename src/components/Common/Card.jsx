function Card({ children, width, height, className, title, padding, titleAlign }) {
  const style = { boxSizing: 'border-box', opacity: 1, boxShadow: '0px 3px 6px #00000029', borderRadius: '12px',
    background: '#FFFFFF 0% 0% no-repeat padding-box' }

  // apply default padding 24px unless a custom padding is provided
  if (padding !== undefined) {
    style.padding = typeof padding === 'number' ? `${padding}px` : padding
  } else {
    style.padding = '24px'
  }

  if (width !== undefined) style.width = width
  if (height !== undefined) style.height = height
  const titleStyle = {
    textAlign: titleAlign || 'left',
    font: 'normal normal 500 20px/24px "Montserrat", sans-serif',
    letterSpacing: '0px',
    opacity: 1,
    color: '#537178',
    marginBottom: '12px'

  }

  return (
    <div className={`card ${className || ''}`} style={style}>
      {title ? <div className="card-title" style={titleStyle}>{title}</div> : null}
      {children}
    </div>
  )
}

export default Card;
