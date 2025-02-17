/* import { Link , useParams  } from "react-router-dom"; */
import { useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  /* const params = useParams(); */
  const data = useLoaderData();

  return (
    <EventItem event={data.event} />
    /* <>
      <h1>Event Detail Page</h1>
      <p>Event ID: {params.eventId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
      <p>
        <Link to="edit">Edit</Link>
      </p>
    </> */
  );
}
// objeto request.
// params: objeto con todos mis parametros de ruta.
export async function loader({ request, params }) {
  //aqui no usaremos request porque no es necesario. Ese request es para temas de url.
  // params es lo que se necesita para completar la url de abajo.
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  // o tambien se puede asi:
  // return await fetch('http://localhost:8080/events/' + id);
  // pero como quiero verificar si el !response.ok, uso el otro enfoque.

  if (!response.ok) {
    throw new Error(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
