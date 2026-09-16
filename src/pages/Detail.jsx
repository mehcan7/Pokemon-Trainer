import { useParams } from 'react-router-dom' // haalt het :id stukje uit de URL

// Detail pagina: te zien op URL "/detail/:id" (zie App.jsx).
// Het ":id" in de route is een placeholder: /detail/1 -> id is "1", /detail/25 -> id is "25".
function Detail() {
  // useParams() leest die placeholder uit de huidige URL en geeft 'm terug als object.
  // { id } pakt daaruit specifiek het stukje dat "id" heet.
  const { id } = useParams()

  return (
    <div>
      <h2>Detail</h2>
      {/* {id} is gewoon JS-code midden in de JSX, geeft de waarde uit de URL weer */}
      <p>Pokémon detail komt hier (id: {id})</p>
    </div>
  )
}

export default Detail
