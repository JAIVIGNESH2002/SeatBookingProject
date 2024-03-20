import React, { useState } from 'react';
import './AdminLayouts.css'; // Import your CSS file for styling
import '../GenSeat/GenSeat';
import '../GenSeat/GenSeat.css';

import EventIcon from '@material-ui/icons/Event'; 
import GenSeat from '../GenSeat/GenSeat';

function AdminLayouts() {
  const [seatLayoutName, setSeatLayoutName] = useState('');
  const [totalSeats, setTotalSeats] = useState(0);
  const [numRows, setNumRows] = useState(0);
  const [numColumns, setNumColumns] = useState(0);
  const [rowSeats,setRowSeats] = useState(0);
  const [availableForBooking, setAvailableForBooking] = useState(false);

  const [showSeatLayout, setShowSeatLayout] = useState(false);

//   const handleGenerateLayout = () => {
//     // Implement functionality to generate layout here
//     console.log("Generating layout...");
//   };
const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any additional validation if needed

    // Render the Seat Layout component
    // return <SeatLayout numRows={numRows} numColumns={numColumns} totalSeats={totalSeats} />;
    setShowSeatLayout(true);
  };

  return (
    <div className="admin-layouts-container">
      <div className="form-container">
        <h1 className="form-title">Create New Seat Layout</h1>
        <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="seatLayoutName" className="input-label">Seat Layout Name:</label>
          <input
            type="text"
            id="seatLayoutName"
            placeholder="Enter Seat Layout Name"
            value={seatLayoutName}
            onChange={(e) => setSeatLayoutName(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-group">
          {/* <label htmlFor="totalSeats" className="input-label">Total Number of Seats:</label> */}
          {/* <input
            type="number"
            id="totalSeats"
            placeholder="Enter Total Number of Seats"
            value={totalSeats}
            onChange={(e) => setTotalSeats(e.target.value)}
            className="input-field"
          /> */}
        </div>
        <div className="input-group">
          <label htmlFor="numRows" className="input-label">Number of Rows:</label>
          <input
            type="number"
            id="numRows"
            placeholder="Enter Number of Rows"
            value={numRows}
            onChange={(e) => setNumRows(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-group">
          {/* <label htmlFor="numColumns" className="input-label">Number of Columns:</label> */}
          {/* <input
            type="number"
            id="numColumns"
            placeholder="Enter Number of Columns"
            value={numColumns}
            onChange={(e) => setNumColumns(e.target.value)}
            className="input-field"
          /> */}
        </div>
        <div className="input-group">
          <label htmlFor="numColumns" className="input-label">Number of seats/row:</label>
          <input
            type="number"
            id="rowSeats"
            placeholder="Enter Number of seats per row"
            value={rowSeats}
            onChange={(e) => setRowSeats(e.target.value)}
            className="input-field"
          />
        </div>        
        <div></div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="availableForBooking"
            checked={availableForBooking}
            onChange={(e) => setAvailableForBooking(e.target.checked)}
            className="checkbox"
          />
          <label htmlFor="availableForBooking" className="checkbox-label">Available for Booking</label>
        </div>
        <button type='submit' className="generate-button">
          Generate Layout
        </button>
        </form>
      </div>
      {showSeatLayout && <GenSeat numRows={numRows} numColumns={rowSeats} totalSeats={numRows*rowSeats} />}
    </div>
  );
}

export default AdminLayouts;
