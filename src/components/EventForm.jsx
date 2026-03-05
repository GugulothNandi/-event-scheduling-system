import { useState, useEffect } from "react";

function EventForm({ addEvent, editingEvent }) {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
  });

  useEffect(() => {
    if (!editingEvent) return;
    const { title = "", date = "", time = "" } = editingEvent;
    Promise.resolve().then(() => {
      setFormData({
        title,
        date: date.toISOString().split("T")[0],
        time,
      });
    });
  }, [editingEvent]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.time) {
      alert("Please fill all fields");
      return;
    }
    addEvent(formData);
    setFormData({ title: "", date: "", time: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 rounded-xl bg-white shadow mb-4"
    >
      <input
        type="text"
        name="title"
        placeholder="Event Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
      />

      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
      />
      <textarea
        name="description"
        placeholder="Event Description"
        value={formData.description || ""}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        {editingEvent ? "Update Event" : "Add Event"}
      </button>
    </form>
  );
}

export default EventForm;
