import React from 'react'
import Card from './Card';
import $data from './$data';
function Holly() {
  return (
      <>
       <Card name={$data[0].$name}  link={$data[0].$imglink} title={$data[0].$title} hlink={$data[0].$link} />
       <Card name={$data[1].$name}  link={$data[1].$imglink} title={$data[1].$title} hlink={$data[1].$link}/>
       <Card name={$data[2].$name}  link={$data[2].$imglink} title={$data[2].$title} hlink={$data[2].$link}/>
       <Card name={$data[3].$name}  link={$data[3].$imglink} title={$data[3].$title} hlink={$data[3].$link}/>
    </>
  )
}

export default Holly
