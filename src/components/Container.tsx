import React, { CSSProperties } from 'react'

type ContainerProps = {
    styles : CSSProperties
}

const Container = ( {styles }: ContainerProps) => {
  return (
    <div style={styles}>Container</div>
  )
}

export default Container