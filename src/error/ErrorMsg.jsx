// ErrorMsg.jsx
import { useFetcher } from "../hooks/useFetcher";

export function ErrorMsg() {
  const { data: error } = useFetcher(
    "https://v2.api.noroff.dev/holidaze/venues"
  );

  return <div className="error">Error: {error}</div>;
}
