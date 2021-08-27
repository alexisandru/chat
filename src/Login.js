import React from 'react'
import styled from 'styled-components'

import {db, auth, googleSign} from './firebase';


const Login = (props) => {

     

  const googleSignIn = () => {
    auth.signInWithPopup(googleSign)
      .then(result => {
        db.collection("users").doc(result.user.uid).set({
          user_id: result.user.uid,
          displayName: result.user.displayName,
          email: result.user.email,
        })
      })
  }


  return (
    <Container>
      <button onClick={() => googleSignIn()}>Sign In with Google</button>
      <button onClick={() => console.log(auth.currentUser.uid)}>check</button>
    </Container>
  )
}

export default Login


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
 