import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarView({ events }) {
  // Convert event dates to strings for comparison
  const eventDates = events.map((e) => e.date.toDateString());

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 p-4 rounded-2xl shadow-xl mt-6">
      <h2 className="text-white font-bold text-xl mb-4 text-center">
        Calendar
      </h2>

      <Calendar
        className="rounded-xl overflow-hidden shadow-lg"
        tileContent={({ date, view }) => {
          if (view === "month" && eventDates.includes(date.toDateString())) {
            return (
              <div className="flex justify-center mt-1">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
            );
          }
        }}
        tileClassName="hover:bg-white/30 transition-colors cursor-pointer"
      />
    </div>
  );
}

export default CalendarView;
