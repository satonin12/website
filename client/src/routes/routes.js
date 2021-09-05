import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
// import { LinksPage } from '../pages/LinksPage'
import { CreatePage } from '../pages/CreatePage'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { CallRoom } from '../pages/CallRoom/CallRoom'
// import { AuthPage } from './pages/AuthPage'

import { CreateRoom } from '../context/CreateRoom'
import { useCreateRoom } from '../hooks/createRoom.hook'

export const useRoutes = isAuthenticated => {
  const { roomName, roomID, createRoom } = useCreateRoom()
  if (isAuthenticated) {
    return (
      <CreateRoom.Provider
        value={{
          roomName,
          roomID,
          createRoom,
        }}
      >
        <BrowserRouter>
          <Switch>
            {/*<Route path="/links" exact component={LinksPage} />*/}
            <Route path="/videochat/create" exact component={CreatePage} />
            <Route path="/videochat/room/:id" exact component={CallRoom} />
            <Redirect to="/videochat/create" />
          </Switch>
        </BrowserRouter>
      </CreateRoom.Provider>
    )
  }

  return (
    <Switch>
      <Route path="/videochat/" exact>
        <LoginPage />
      </Route>
      <Redirect to="/videochat/" />
    </Switch>
  )
}
