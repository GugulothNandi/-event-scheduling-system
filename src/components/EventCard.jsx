function EventCard({ event, deleteEvent, editEvent }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold">{event.title}</h2>
      <p className="text-gray-600">
        {event.date} at {event.time}
      </p>
      <p className="mt-2">{event.description}</p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={() => editEvent(event)}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => deleteEvent(event.id)}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default EventCard;
