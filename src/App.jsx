import { Layout } from './components/Layout/Layout'
import { Post } from './components/Post/Post'
import { useFetch } from './hooks/useFetch'
import './App.css'
import { useState } from 'react'
import { SearchBox } from './components/SearchBox/SearchBox'

function App() {
  const { data, isLoading } = useFetch("https://jsonplaceholder.typicode.com/posts")
  const [filter, setFilter] = useState("sunt ")

  let filteredPost;
  if (!isLoading) {
    filteredPost = data.filter((post) => post.title.includes(filter))
  }

  function updateFilter(event) {
    const newValue = event.target.value
    setFilter(newValue)
  }

  return (
    <Layout>
      <section>
        <h2>Posts</h2>

        <SearchBox onChange={updateFilter} />

        {
          isLoading
            ? <p>Loading...</p>
            : (
              <ul>
                {
                  filteredPost.map((post) => {
                    return (
                      <li key={post.id}>
                        <Post post={post} />
                      </li>
                    )
                  })
                }
              </ul>
            )
        }
      </section>

    </Layout>
  )
}


export default App
