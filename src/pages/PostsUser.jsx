import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Col, FormGroup, Input } from "reactstrap";

export const PostsUser = () => {
  const userid = useParams();
  const [posts, setPosts] = useState([]);
  const [postsEdit, setPostsEdit] = useState([]);
  const [postsCreate, setPostsCreate] = useState({});
  console.log(posts)

  ///////////////----------------------<region>
  const EditPosts = (id) => {
    axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, postsEdit).then(e => console.log(e))
  }
  const CreatePosts = (id) => {
    axios.post(`https://jsonplaceholder.typicode.com/users/posts`, postsCreate)
      .then(res => console.log(res.data))
  }
  const CreateEditPosts = (id) => {
   
  }
  //////////////////-------------------------</region> comentler arasi tam deyil
  const editPostsEdit = (value,parametr) =>{
   
  }
  const DeletePosts = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/posts/${id}`)
      .then(res => console.log('Deleted'))
      .catch(err => console.log('Unsuccessful'))
    axios.get(`https://jsonplaceholder.typicode.com/users/${userid}/posts`)
      .then(res => setPosts(res.data))
      .catch(console.log('Error loading data'))
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userid}/posts`).then((e)=>setPosts(e.data))
  }, [])

  return (<>
    <Col>
    <FormGroup>
      <Input
      id='InputTitle'
      name='TitleInput'
      placeholder="Title"
      type="text"
      value={postsEdit && postsEdit.title} ///////////
      onChange={(q)=> editPostsEdit(q.target.value, 'title') }
      />
    </FormGroup>
    <FormGroup>
      <Input
      id='InputBody'
      name='BodyInput'
      placeholder="Main"
      type="text"
      value={postsEdit && postsEdit.body} ///////////
      onChange={(q)=> editPostsEdit(q.target.value, 'body') }
      />
    </FormGroup>

      {posts && posts.map((k) => 
        <Card>
          <CardHeader>post ID : {k.id}</CardHeader>
          <CardBody>
            <CardTitle>{k.title}</CardTitle>
            <CardText>{k.body}</CardText>
            <Button onClick={() => { EditPosts(k.id) }}></Button>
            <Button onClick={() => { DeletePosts(k.id) }}></Button>
            <Button onClick={() => { CreateEditPosts(k.id) }}></Button>
          </CardBody>
        </Card>
      )}
    </Col>
  </>)

}