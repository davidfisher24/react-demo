import React, { memo } from 'react'

import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'

import styles from './Modal.module.css'
import { ModalContext } from '../ModalContext'

const fadeTime = 1000

const AppModal = () => {
  const { handleModal, state } = React.useContext(ModalContext)

  return (
    <Modal
      className={styles.backdrop}
      open={state}
      onClose={handleModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: fadeTime,
      }}
    >
      <Fade in={state} timeout={fadeTime}>
        <div className={styles.dialog}>
          <IconButton aria-label="close" onClick={handleModal}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h3">Notification modal</Typography>
          <Typography variant="h6">
            This modal will disappear after 3 seconds.
          </Typography>
        </div>
      </Fade>
    </Modal>
  )
}

export default memo(AppModal)
