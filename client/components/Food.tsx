import { Link } from 'react-router-dom'
import { GetCuisines } from '../apiClient.ts'

function Food() {

  const { data, isError, isPending } = GetCuisines()

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>There was an error</p>
  }
  

  return (
    <>
    <section className='home'>
      <h1>Select your favourite food!</h1>
      {data.map((cuisine) => (
        <div key={cuisine.name}>
          <h3>
          <Link to={`/cuisines/${cuisine.id}`}>
            {cuisine.name}
            </Link>
            </h3>
          <p>{cuisine.description}</p>
        </div>
      ))}
    </section>
    </>
  )
}

export default Food
