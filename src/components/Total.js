import React from 'react'

const Total = () => {
    const part3 = 'State of a Component'
    const exercises1 = 10
    const exercises2 = 7
    const exercises3 = 14

  return (
    <div>    <p>
    {part3} {exercises3}
  </p>
  <p>Number of exercises  {exercises1 + exercises2 + exercises3}</p>

</div>
  )
}

export default Total