import AccortionBody from "./AccortionBody.jsx"

export default function AppMain({ languages }) {

  return (

    <main>
      <div className="container">
        <div className="row row-cols-1">
          <AccortionBody languages={languages} />
          {languages.map(({ id, description }) => (
            <div key={id} className="col-12">
              {description}
            </div>
          ))
          }
        </div>
      </div>
    </main >

  )
}

