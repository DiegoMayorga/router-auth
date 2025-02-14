import EventsList from "../components/EventsList";

import { useLoaderData, json } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData(); // ?

  /*   if (data.isError) { // 2
    return <p>{data.message}</p>; 
  } */

  const events = data.events; // ?

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    /* return { isError: true, message: "Could not fetch events." }; // 1 */
    /* throw { message: "Could not fetch events." }; */
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500, // para decir que el error fue del backend.
    });
    /* return json({ message: "Could not fetch events." }, { status: 500 }); */
  } else {
    return response;
  }
}
