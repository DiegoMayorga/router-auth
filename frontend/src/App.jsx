import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventDetailPage from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import EventRootLayout from "./pages/EventRoot";

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [ 
      { index: true, element: <HomePage /> },
      // puedo hacer nietos :D
      {
        path: "events",
        element: <EventRootLayout />,
        children: [
          { path: "", element: <EventsPage /> },
          { path: ":eventId", element: <EventDetailPage /> },
          // esta y la anterior ruta pueden chocar porque en la anterior dije que cualquier cosa despues de /events/... servia.
          // sin embargo, react es inteligente y pone primero el /new que cualquier cosa. Por ende, no habra problema.
          { path: "new", element: <NewEventPage /> },
          // Puedo agregar sin problema un path estatico luego de uno dinamico.
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
