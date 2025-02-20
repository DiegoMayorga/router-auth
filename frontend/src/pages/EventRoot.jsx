import { Outlet, useRouteLoaderData } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

export default function EventRootLayout() {
  const token = useRouteLoaderData("root");
  return (
    <>
      {token && <EventsNavigation />}
      <main>
        <Outlet />
      </main>
    </>
  );
}
