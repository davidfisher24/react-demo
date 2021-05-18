import React from 'react'

export default () => {
  const [state, setState] = React.useState(false)

  const handleModal = () => {
    setState(!state)
  }

  return { state, handleModal }
}
