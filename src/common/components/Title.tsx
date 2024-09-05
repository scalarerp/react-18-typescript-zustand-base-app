import React from 'react'

const Title = ({
  children,
  className = '',
  borderBottom = true,
}: {
  children: React.ReactNode
  className?: string
  borderBottom?: boolean
}) => {
  const childrenArray = React.Children.toArray(children)

  //Title de content panel
  if (childrenArray.length === 2) {
    return (
      <div className="mb-3 pb-2 d-flex justify-content-between align-items-center border-bottom">
        <div className="fs-2 fw-bolder ps-2 text-uppercase ">
          {childrenArray[0]}
        </div>

        {childrenArray[1]}
      </div>
    )
  }

  return (
    <div
      className={`fw-bolder ${className} ${borderBottom ? 'border-bottom' : ''} ps-2  pb-1 mb-2`}
    >
      {children}
    </div>
  )
}

export default Title
