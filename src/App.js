import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppButton from './components/Button'
import AppModal from './components/Modal'
import { ModalProvider } from './ModalContext'

const containerStyles = {
  height: '100vh',
}

function App() {
  return (
    <ModalProvider>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={containerStyles}
      >
        <AppButton />
      </Grid>

      <AppModal />
    </ModalProvider>
  )
}
export default App
