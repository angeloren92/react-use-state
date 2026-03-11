import { useState } from "react"

export default function AppMain({ languages }) {

  let [count, setCount] = useState(0)
  const markup = languages.find(element => element.id === count)

  return (
    <main>
      <div className="container">
        <div className="d-flex" >
          {
            languages.map(({ id, title }) => (
              <div className="card">
                <button key={id} onClick={() => setCount(count = id)}>
                  {title}
                </button>
              </div>
            ))
          }
        </div>
        {markup && (
          <div className="card-body">
            <h3>{markup.title}</h3>
            <p>{markup.description}</p>
          </div>
        )
        }
      </div>
    </main >

  )
}

