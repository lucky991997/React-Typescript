import React ,{ReactNode} from 'react'

type HeadingProps = {
    children : ReactNode;
}

const Heading = ( { children }: HeadingProps) => {
  return (
    <div>{children} </div>
  )
}

export default Heading