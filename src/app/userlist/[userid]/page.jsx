import React from 'react'

function page({params}) {
  return (
    <div>
      user information is :  {params.userid}
    </div>
  )
}

export default page


export function generateMetadata(){
  return{
    title:"welcome metadata",
    description:"welcome metadata description"
  }
}