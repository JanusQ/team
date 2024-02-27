import React from 'react'

export default function Test() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
  return (
    <div>
      {items.map((item, index) => (
        <div className="box">
          {index % 2 === 0 ? (
            <div key={index}>
              <p>{items[index]}</p>
              {items[index + 1] && <p>{items[index + 1]}</p>}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  )
}
