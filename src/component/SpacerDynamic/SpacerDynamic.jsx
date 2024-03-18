import './Spacer.scss' // Import the Sass file

const SpacerDynamic = ({ size, responsiveSizes }) => {
  const spacerStyle = {
    height: size,
    width: size, // You can adjust this if you need horizontal spacing
  }

  // Override spacer size with responsive sizes if provided
  if (responsiveSizes) {
    const { mobile, tablet, desktop } = responsiveSizes
    spacerStyle.height = desktop // Default size for large screens
    if (window.innerWidth < 768) {
      spacerStyle.height = tablet // Medium screens
    }
    if (window.innerWidth < 576) {
      spacerStyle.height = mobile // Small screens
    }
  }

  return <div className='spacer' style={spacerStyle} />
}

export default SpacerDynamic

{
  /* <SpacerDynamic
  size="20px"
  responsiveSizes={{
    sm: '10px',
    md: '15px',
    lg: '25px'
  }}
/> */
}
