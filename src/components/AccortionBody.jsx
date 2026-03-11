export default function AccortionBody({languages}) {

  return (
    <div className="col">
      {
        languages.map(element => (
          <button key={element.id}>
            {element.title}
          </button>
        ))
      }
    </div>
  )
}
