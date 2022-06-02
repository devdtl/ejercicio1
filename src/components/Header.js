import React from 'react'

const Header = () => {
    const course = 'Web languages'
    const part1 = 'Introduction to React'
    const exercises1 = 10

  return (
    <div>
        <h1>{course}</h1>
        <p>
          {part1} {exercises1}
        </p>

        </div>
  )
}

export default Header