import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://hello-backend-mcb58pzc6-divyachowdaiahs-projects.vercel.app/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return <h1>{message}</h1>;
}

export default App;
