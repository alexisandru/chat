import React, { useState } from 'react'
import {auth, date, db}  from './firebase'
import styled from 'styled-components'

const CreatePost = () => {

  const user = auth.currentUser

  const [post, setPost] = useState({
    user_id: user.uid,
    time: "",
    post: "",
  })

  const updatePost = (e) => {
    setPost({
      ...post,
      time: date.fromDate(new Date()).toDate(),
      post: e.target.value
    })

  }

  const sendPost = () => {
    db.collection("posts").doc().set(post);

    setPost({
      user_id: user.uid,
      time: "",
      post: "",
    })
  }

  
  return (
    <Container>
      <Input type="text" onChange={updatePost} value={post.post}/>
      <button onClick={sendPost}>Post</button>
    </Container>
  )
}

export default CreatePost

const Container = styled.div`
  border: 1px solid #000000;
  align-self: center;
  width: 40%;
  margin-top: 20px;
  padding: 10px;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`

const Input = styled.input`
  width: 100%;
`