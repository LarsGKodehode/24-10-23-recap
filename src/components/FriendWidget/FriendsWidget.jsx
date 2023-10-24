import { FriendCard } from "./FriendCard"
import { useFetch } from "../../hooks/useFetch"

export function FriendWidget() {
  const { isLoading, data } = useFetch("https://reqres.in/api/users")

  return (
    <div>
      {
        isLoading
          ? <p>Loading...</p>
          : (
            <ul>
              {
                data.data.map((person) => {
                  return (
                    <li key={person.id}>
                      <FriendCard person={person} />
                    </li>
                  )
                })
              }
            </ul>
          )
      }
    </div>
  )
}