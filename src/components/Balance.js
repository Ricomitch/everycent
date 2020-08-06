import React from 'react'

export default function Balance({balance}) {
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 style={{color: "Green"}}>${balance}</h1>
    </div>
  )
}

