import React from 'react'

export default function Button({title,onClick}) {
  return (
	<button style={{backgroundColor:'#00D100',border:'none',padding:'10px 20px',borderRadius:'5px',margin:'10px 0px',cursor:'pointer',boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}} onClick={onClick}>{title}</button>
  )
}
