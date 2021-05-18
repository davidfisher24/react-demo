import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import useModal from './hooks/useModal'

const ModalContext = React.createContext()
const { Provider } = ModalContext

const dialogTimeout = 3000

const ModalProvider = ({ children }) => {
  const { state, handleModal } = useModal()

  useEffect(() => {
    if (state) {
      const fadeOutTimer = setTimeout(() => {
        handleModal()
      }, dialogTimeout)
      return () => clearTimeout(fadeOutTimer)
    }
    return null
  }, [state])

  return <Provider value={{ state, handleModal }}>{children}</Provider>
}

ModalProvider.propTypes = {
  children: PropTypes.any,
}

export { ModalContext, ModalProvider }
