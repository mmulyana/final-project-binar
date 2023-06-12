import React, { useState } from "react";
import withCollapsible from "./withCollapsible";

function TimeFilter() {
  const times = [];
  for (let i = 0; i < 24; i++) {
    const startHour = i.toString().padStart(2, "0");
    const endHour = ((i + 3) % 24).toString().padStart(2, "0");
    const label = `${startHour}:00 - ${endHour}:00`;
    times.push({ start: `${startHour}:00`, end: `${endHour}:00`, label });
  }

  const [selectedDepartureTime, setSelectedDepartureTime] = useState("");
  const [selectedArrivalTime, setSelectedArrivalTime] = useState("");
  const [isDepartureTimeChecked, setIsDepartureTimeChecked] = useState(false);
  const [isArrivalTimeChecked, setIsArrivalTimeChecked] = useState(false);

  const handleDepartureTimeChange = (event) => {
    const selectedTime = event.target.value;
    setSelectedDepartureTime(selectedTime);
    setIsDepartureTimeChecked(true);
  };

  const handleArrivalTimeChange = (event) => {
    const selectedTime = event.target.value;
    setSelectedArrivalTime(selectedTime);
    setIsArrivalTimeChecked(true);
  };

  return (
    <div>
      <p className="mr-2 text-gray-400">Berangkat</p>
      <div className="flex items-center mb-4">
        <select
          value={selectedDepartureTime}
          onChange={handleDepartureTimeChange}
          className="border border-gray-300 rounded px-2 py-1 mr-2"
        >
          <option value="">Pilih waktu</option>
          {times.map((time) => (
            <option key={time.start} value={time.start}>
              {time.label}
            </option>
          ))}
        </select>
        {isDepartureTimeChecked && (
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={isDepartureTimeChecked}
              onChange={() => setIsDepartureTimeChecked(false)}
              className="form-checkbox h-4 w-4 text-indigo-600 mr-2"
            />
          </label>
        )}
      </div>
      <p className="mr-2 text-gray-400">Tiba</p>
      <div className="flex items-center">
        <select
          value={selectedArrivalTime}
          onChange={handleArrivalTimeChange}
          className="border border-gray-300 rounded px-2 py-1 mr-2"
        >
          <option value="">Pilih waktu</option>
          {times.map((time) => (
            <option key={time.start} value={time.start}>
              {time.label}
            </option>
          ))}
        </select>
        {isArrivalTimeChecked && (
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={isArrivalTimeChecked}
              onChange={() => setIsArrivalTimeChecked(false)}
              className="form-checkbox h-4 w-4 text-indigo-600 mr-2"
            />
          </label>
        )}
      </div>
    </div>
  );
}

const TimeFilterCollapsible = withCollapsible(TimeFilter);
export default TimeFilterCollapsible;
