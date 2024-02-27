import React from 'react'

function EmailView({emailData, setEmailData}) {
  return (
  <>
    <h1>{emailData.title}</h1>
    <button onClick={() => setEmailData()}>Back</button>
    </>)
}

export default EmailView