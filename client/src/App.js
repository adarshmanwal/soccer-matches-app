import { useEffect, useState } from "react";
function App() {
  const [matches, setMatches] = useState([]);
  const apiUrl = "http://localhost:5000/api/matches";
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setMatches(data))
      .catch((err) => console.error("Error fetching matches:", err));
  }, []);

  return (
    <div className="flex-col">
      <h1 className="text-3xl font-bold text-center mb-6 ">
        Soccer Matches List
      </h1>
      <div className="max-w-3xl mx-auto space-y-4">
        {matches.map((match, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {match.homeTeam} vs {match.awayTeam}
            </h2>
            <p className="text-gray-600">
              Date: {new Date(match.date).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
