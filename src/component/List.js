import React from 'react'
import ListItem from './ListItem';

function List({data}) {
  return (
    <ul>
      {
          data && data.map((item)=>{
            return (<ListItem {...item} key={item.id}/>)
          })
      }
    </ul>
  )
}

export default List
