import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://hello-eor5z28ou-divyachowdaiahs-projects.vercel.app/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return <h1>hi</h1>;
}

export default App;
