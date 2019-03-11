import React from 'react'

function ListItem({id, title, desc}) {
  return (
    <li>
        <ul>
            <li>{id}</li>
            <li>{title}</li>
            <li>{desc}</li>
        </ul>
    </li>
  )
}

export default ListItem
