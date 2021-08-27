import React, { useState, useEffect } from 'react';
import {auth} from './firebase';

import styled from 'styled-components'

import Login from './Login'
import ShowPosts from './ShowPosts'
import CreatePost from './CreatePost.js'

function App() {
  
  const [session, setSession] = useState()
  const [user, setUser] = useState({
    name: "",
    uid: "",
    email: "",
  })

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      user ? addUserData(user) : setSession(false);
    })   
  }, [])

  const addUserData = (user) => {
    setUser({
      name: user.displayName,
      uid: user.uid,
      email: user.email,
    })
    setSession(true)
  }



/*
  useEffect(() => {
    if(session === true) {
      getPosts()
    } else {
      console.log("No")
    }
  }, [session])

  const getPosts = async () => {
    const posts = await db.collection("posts").where("user_id", "==", auth.currentUser.uid).get()

    if(posts) {
      console.log("Si hay notas")
      posts.forEach(doc => {
        
        let pos = doc.data()
        console.log(pos.user_id, pos.post)
      })
    } else {
      console.log("no")
    }

  }
*/
 
  
  

  // const sendNote = () => {
  //   db.collection("note").doc().set(note);
  //   setNote({note: ""})
  // }
  
  // const showNotes = async () => {
  //   const things = await db.collection("note").get()
  //   console.log(things)
  //   things.forEach(doc => {
  //     console.log(doc.data())
  //   })
  // }

  const logout = () => {
    auth.signOut()
      .then(() => console.log("logout"))
  }

  
  return (
    <Container>
      {
        session 
        ? <>
            <button onClick={logout}>logout</button>
            <CreatePost /> 
            <ShowPosts /> 
          </>
        : <Login/>
      }
      
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`