import AccortionBody from "./AccortionBody.jsx"

export default function AppMain({ languages }) {

  return (

    <main>
      <div className="container">
        <div className="row row-cols-1">

          <AccortionBody languages={languages} />
          {languages.map(({ id, description }) => (
            <div className="col">
              {description}
            </div>
          ))
          }

        </div>
      </div>
    </main >

  )
}

