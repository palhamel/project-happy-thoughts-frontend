import React from 'react'
import { ThoughtsList } from './components/Thoughts'
import { MessageInputForm } from './components/MessageInput'
import { Logo } from './components/Logo'

export const App = () => {
  return (
    <div>
      <Logo />
      <MessageInputForm />
      <ThoughtsList />
    </div>
  )
}
