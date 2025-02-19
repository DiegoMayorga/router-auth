import { Suspense } from "react";
import EventsList from "../components/EventsList";

import { useLoaderData, Await } from "react-router-dom";

function EventsPage() {
  // ahora, la data que almacene aqui en esta constante es lo que retorno en el defer.

  const { events } = useLoaderData();
  /* antes const data = useLoaderData(); */

  // en lugar de almacenar los eventos de la data en una constante, retorno:

  return (
    // El Suspense, propio de la libreria 'react' es un componente que se puede usar en
    // determinadas situaciones para mostrar una alternativa (fallback) mientras esperamos
    // a que lleguen otros datos. Se vera mas a detalle adelante. Pero aqui, se puede usar en
    // react router para mostrar un fallback mientras esperamos que estos eventos sean recuperados.
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );

  /*   if (data.isError) {
    return <p>{data.message}</p>; 
  } */

  /* const events = data.events; */

  /* return <EventsList events={events} />; */
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    /* return { isError: true, message: "Could not fetch events." }; // 1 */
    /* throw { message: "Could not fetch events." }; */
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500, // para decir que el error fue del backend.
    });
    /* return json({ message: "Could not fetch events." }, { status: 500 }); */
  } else {
    const resText = await response.text();
    const resData = JSON.parse(resText);
    // antes: const resData = await response.json(); antes de la v19 de react porque ya la 19 no soporta json.
    return resData.events;
    // antes return response;
  }
}

export function loader() {
  // en este objeto agrupo todas las diferentes peticiones HTTP que podria tener en esta pagina.
  // en este caso solo es una peticion, la de todos mis eventos.
  // antes return defer({});
  return {
    // Aqui ejecuto la funcion asincrona. Si no tuviera una promesa, no habria nada que diferir,
    // porque la idea detras de diferir (defer()) es que tenemos un valor que eventualmente se
    // resolvera a otro valor (que es la definicion de promesa). y quiero cargar un componente
    // y renderizar uno aunque ese valor futuro aun no esta ahi.
    events: loadEvents(),
  };
  // retorno ese defer en el loader.
}
