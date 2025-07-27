import React from 'react';

const reservations = [
  { id: 1, venueName: "The Grand Cafe", date: "2024-08-15", time: "19:00", partySize: 2, status: "Confirmed" },
  { id: 2, venueName: "Ocean's Breeze", date: "2024-08-22", time: "20:30", partySize: 4, status: "Confirmed" },
  { id: 3, venueName: "The Rooftop Grill", date: "2024-09-01", time: "18:00", partySize: 5, status: "Pending" },
];

const UpcomingReservations = () => {
  const handleCancel = (id) => {
    console.log("Cancel reservation:", id);
  };

  return (
    <div className="container">
      <h2 className="heading">Upcoming Reservations</h2>
      <div className="reservation-list">
        {reservations.map(({ id, venueName, date, time, partySize, status }) => (
          <div key={id} className="card">
            <div className="details">
              <h3>{venueName}</h3>
              <p>Date: {date}</p>
              <p>Time: {time}</p>
              <p>Party Size: {partySize}</p>
              <p className={`status ${status.toLowerCase()}`}>{status}</p>
            </div>
            <button className="cancel-btn" onClick={() => handleCancel(id)}>Cancel</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingReservations;
