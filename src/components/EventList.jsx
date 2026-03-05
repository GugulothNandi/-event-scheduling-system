import React from "react";

function EventList({ events, deleteEvent, editEvent }) {
  if (events.length === 0) {
    return <p className="text-center text-gray-500">No events found.</p>;
  }

  return (
    <div className="mt-4 space-y-4">
      {events.map((event) => (
        <div
          key={event.id}
          className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-gray-100 rounded shadow"
        >
          <div>
            <h2 className="font-bold text-lg">{event.title}</h2>

            <p className="text-gray-600">
              {new Date(event.date).toLocaleDateString()} {event.time}
            </p>

            {event.description && (
              <p className="text-gray-700 mt-1">{event.description}</p>
            )}
          </div>

          <div className="flex gap-2 mt-2 md:mt-0">
            <button
              onClick={() => editEvent(event)}
              className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
            >
              Edit
            </button>

            <button
              onClick={() => deleteEvent(event.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventList;
