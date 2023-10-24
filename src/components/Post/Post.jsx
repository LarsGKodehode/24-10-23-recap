import style from './Post.module.css'

export function Post(props) {
  const { post } = props

  return (
    <article className={style.container}>
      <header>
        <h3>{post.title}</h3>
      </header>

      <p>{post.body}</p>
    </article>
  )
}