import style from './FriendCard.module.css'

console.log(style)

export function FriendCard(props) {
  const { person } = props

  return (
    <div className={style.container}>
      <header>
        {person.first_name} {person.last_name}
      </header>

      <div>
        <img src={person.avatar} alt={`Avatar of ${person.first_name} ${person.last_name}`} />
      </div>

      <footer>
        <p>{person.email}</p>
      </footer>
    </div>
  )
}
