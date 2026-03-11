import { useState } from "react"

export default function AppMain({ languages }) {

  const [count, setCount] = useState(0)

  return (
    <main>
      <div className="container">
        <div className="d-flex" >
          {
            languages.map(element => (
              <button key={element.id} onClick={ () => setCount(count +1) }>{element.title}</button>
            ))}
        </div>
      </div>
      <p>{count}</p>
    </main >

  )
}

