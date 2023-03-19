import React from 'react'

export default function Alerts(props) {
  return (
    <div style={{margin: '0rem 1rem', marginTop: '6.8rem', height: '3.2rem'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.msg}</strong>
</div>}
    </div>
  )
}
