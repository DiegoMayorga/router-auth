import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "e1", title: "First Event" },
  { id: "e2", title: "Second Event" },
  { id: "e3", title: "Third Event" },
];

export default function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
