import React, {useState, useEffect} from 'react'
import {db} from './firebase'
import styled from 'styled-components'

const ShowPosts = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {

    const alias = db.collection("posts").orderBy("time")
   
    await alias.onSnapshot(
      async result => {
        let changes = result.docChanges()

        changes.forEach(async data => {
          const j = data.doc.data()
          let cons = await postss(j.user_id)
          
          setPosts(prev => [{name: cons, post: j.post, uid: j.user_id}, ...prev])  
          
        })

      }, 
      (error) => console.log(error))
  }
    getPosts()
  }, [])

  
 

  const postss = async (postAll) => {
      let name
      await db.collection("users").doc(postAll).get()
        .then(res => {
          let aa = res.data()
          name = aa.displayName
          //console.log(name)
        })
      return name
  }
  
  
  const todos = posts.map(da => {
    return (
      <Post>
        <User>{da.name}</User>
        <Content>{da.post}</Content>
      </Post>
    )
  })

  return (
    <Container>
      
      {
        posts !== [] ? todos : "No"
      }
      
    </Container>
      
  )
}

export default ShowPosts

const Container = styled.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Post = styled.div`
  border: 1px solid #000;
  width: 40%;
  margin-top: 20px; 
  padding: 15px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const User = styled.label`
  font-weight: 600;
`

const Content = styled.div`
  font-size: 0.9em;
  padding-top: 5px;
`