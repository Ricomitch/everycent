import React from 'react'

function Data(props) {
  const data = props.data
return <div key={data.id}>
<h2>{data.fields.Category}</h2>
<h2>{data.fields.Name_of_Expenses}</h2>
<h3>{data.fields.Amount}</h3>
</div>
}

export default Data