import React from 'react';
import './GenSeat.css'; // Import your CSS file for styling
import seatup from './public/seat-53@2x.png';


function SeatDownComponent(props) {

 return(
        <img className="seat_icon" src={seatup} style={{ rotate: "180deg" }} />
 );
}

function GenSeat({ numRows, numColumns, totalSeats }) {
  // Generate the seat layout based on input values
  const renderSeats = () => {
    let seats = [];
    let seatCount = 1;

    for (let i = 0; i < numRows; i++) {
      let rowSeats = [];
      for (let j = 0; j < numColumns; j++) {
        if (seatCount <= totalSeats) {
          rowSeats.push(<SeatDownComponent />);
          seatCount++;
        }
      }
      seats.push(<div key={i} className="row">{rowSeats}</div>);
    }

    return seats;
  };

  return (
    <div className="seat-layout-container">
      <h2>Seat Layout preview</h2>
      <div className="seat-layout">
        {renderSeats()}
      </div>
    </div>
  );
}

export default GenSeat;
