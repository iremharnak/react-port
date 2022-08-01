import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Post from '../../components/Post/Post';
import PostForm from '../../components/PostForm/PostForm';

class Blog extends React.Component {
  state= {
    posts: []
  }
  componentDidMount() {
    this.getPosts()
  }
  getPosts = async () => {
    await fetch('/api/post').then((res) => res.json()).then(data => this.setState({posts: data}))
  }
  render() {
    return(
      <>
          <Navbar />
          {this.state.posts.length ?
            this.state.posts.map(p => (
              <Post 
                post={p}
                getPosts={this.getPosts}
              />
            ))
              :
            <h1>No Posts</h1>
            }
          
          <PostForm />

      </>
    )
  }
}

export default Blog;