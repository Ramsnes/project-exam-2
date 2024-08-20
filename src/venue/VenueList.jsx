// VenueList.jsx
import React from "react";

/* venues prop is given default value of empty array (venues = []). This ensures that venues is always an array and won’t throw an error. */
export function VenueList({ venues = [] }) {
  if (!venues || venues.length === 0) {
    return <div>No venues available</div>;
  }

  return (
    <div>
      <h1>Available Venues</h1>
      <ul>
        {/* maps through array and shows name on each id */}
        {venues.map((venue) => (
          <li key={venue.id}>{venue.name}</li>
        ))}
      </ul>
    </div>
  );
}
