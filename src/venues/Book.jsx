// Book.jsx
import { API_KEY } from "../AuthenticationProvider";
import { Loader } from "../loader/Loader";
import { BookForm } from "./BookForm";
import { useState } from "react";

const baseUrl = "https://v2.api.noroff.dev";

export async function Book() {
  const [loading, setLoading] = useState(false);
  setLoading(true);

  const bookingData = {
    dateFrom: "string",
    dateTo: "string",
    guests: 0,
    venueId: "string",
  };

  try {
    const response = await fetch(`${baseUrl}/holidaze/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Importere user fra authProvider?
        Authorization: `Bearer ${user.accessToken}`,
        "X-Noroff-API-Key": API_KEY,
      },
      body: JSON.stringify(bookingData),
    });
    if (response.ok) {
      alert("Book complete");
    } else {
      alert("Book failed");
    }
  } catch (error) {
    alert("Error", error);
  } finally {
    setLoading(false);
  }
  return (
    <div>
      <BookForm />
      {loading && <Loader />}
    </div>
  );
}
