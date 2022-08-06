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
    // await fetch('/api/post').then((res) => res.json()).then(data => this.setState({posts: data}))
    try {
      let post1 = await fetch('/api/post')
      console.log(post1)
      let post2 = await post1.json()
      console.log(post2)
      this.setState({posts: post2})
    } catch(err) {
      console.log("couldn't fetch posts")
    }
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
          
          <PostForm 
            getPosts={this.getPosts}
          />

      </>
    )
  }
}

export default Blog;