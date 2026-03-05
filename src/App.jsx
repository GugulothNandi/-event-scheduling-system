import { useState, useEffect } from "react";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import SearchBar from "./components/SearchBar";
import CalendarView from "./components/CalendarView";

function App() {
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("events");
    return saved
      ? JSON.parse(saved).map((e) => ({ ...e, date: new Date(e.date) }))
      : [];
  });

  const [editingEvent, setEditingEvent] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "events",
      JSON.stringify(events.map((e) => ({ ...e, date: e.date.toISOString() }))),
    );
  }, [events]);

  const addEvent = (event) => {
    const eventWithDate = {
      ...event,
      id: editingEvent ? editingEvent.id : Date.now(),
      date: new Date(event.date),
    };

    if (editingEvent) {
      setEvents(events.map((e) => (e.id === event.id ? eventWithDate : e)));
      setEditingEvent(null);
    } else {
      setEvents([...events, eventWithDate]);
    }
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  const filteredEvents = events
    .filter((e) => e.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.date - b.date);

  return (
    <div className="min-h-screen p-6 animated-bg">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Event Scheduler</h1>

        <div className="flex justify-center mb-6">
          <CalendarView events={events} />
        </div>

        <SearchBar search={search} setSearch={setSearch} />

        <EventForm addEvent={addEvent} editingEvent={editingEvent} />

        <EventList
          events={filteredEvents}
          deleteEvent={deleteEvent}
          editEvent={setEditingEvent}
        />
      </div>
    </div>
  );
}

export default App;
