import style from './SearchBox.module.css'

export function SearchBox(props) {
  const { onChange } = props

  return (
    <div className={style.container}>
      <input type="text" onChange={onChange} />
    </div>
  )
}