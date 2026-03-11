import { useState } from "react"

export default function AppMain({ languages }) {

  let [count, setCount] = useState(0)
  const selectedElement = languages.find(element => element.id === count)

  return (
    <main>
      <div className="container">
        <div className="d-flex gap-3">
          {
            languages.map(({ id, title }) => (
              <div className="card-header my-5" key={id}>
                <button onClick={() => setCount(id)} type="btn" className={`btn ${count === id ? 'btn-warning' : 'btn-primary'}`}>
                  {title}
                </button>
              </div>
            ))
          }
        </div>
        {
        <div className="card p-3">
          <h3>{selectedElement ? selectedElement.title : 'NESSUN MESSAGGIO SELEZIONATO'}</h3>
          <p>{selectedElement ? selectedElement.description : ''}</p>
        </div>
        }
      </div>
    </main >

  )
}

