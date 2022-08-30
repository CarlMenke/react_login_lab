import React, { Component } from 'react'

export default function Mailbox(props) {
  const unreadMessages = props.unreadMessages

  console.log(unreadMessages)
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  )
}