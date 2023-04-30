import React from 'react'
import Card from './Card';
import $data from './$data';
function Indian() {
  return (
      <>
       <Card name={$data[4].$name}  link={$data[4].$imglink} title={$data[4].$title} hlink={$data[4].$link}/>
       <Card name={$data[5].$name}  link={$data[5].$imglink} title={$data[5].$title} hlink={$data[5].$link}/>
    </>
  )
}

export default Indian