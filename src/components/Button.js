import React, { memo } from 'react'
import Button from '@material-ui/core/Button'
import { ModalContext } from '../ModalContext'

const AppButton = () => {
  const { handleModal } = React.useContext(ModalContext)

  return (
    <Button variant="contained" color="primary" onClick={handleModal}>
      Show notifcation
    </Button>
  )
}

export default memo(AppButton)
