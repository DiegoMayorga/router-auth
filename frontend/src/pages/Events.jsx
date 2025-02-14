import EventsList from "../components/EventsList";

import { useLoaderData } from "react-router-dom";

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
    throw { message: "Could not fetch events." };
  } else {
    return response;
  }
}
