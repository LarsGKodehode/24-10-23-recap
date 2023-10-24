import { FriendWidget } from '../FriendWidget/FriendsWidget'
import './Layout.css'

export function Layout(props) {
  const { children } = props

  return (
    <div className='Layout'>
      <header>
        <h1>Recap 24.10.24</h1>
      </header>

      <div className='main'>
        <main>
          {children}
        </main>
        <aside>
          <FriendWidget />
        </aside>
      </div>

      <footer>
        <p>Kodehodet</p>
      </footer>
    </div>
  )
}