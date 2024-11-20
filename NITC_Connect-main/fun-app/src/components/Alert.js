import React from 'react'


export default function Alert(props) {
  return (
   
   props.State.checkBit===1&&(<div className="alert alert-primary alert-dismissible show fade" role="alert">
    {props.State.message}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>)

  )
}
