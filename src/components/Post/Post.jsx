import './Post.css'


export default function Post(props) {
  return(
      <section className='body-container'>
        <div className="post">
            <p className="title">{props.post._id}</p>
            <p className="content">{props.post.content}</p>
        </div>
      </section>
  )
}
