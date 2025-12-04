import "./App.css";
import { useState } from "react";
import { TeethDiagram } from "react-teeth-selector";

function App() {
  const [selectedTeeth, setSelectedTeeth] = useState({});

  const handleTeethChange = (map, info) => {
    if (!info.isSelected) {
      setSelectedTeeth({ ...map, [info.id]: true });
    } else {
      setSelectedTeeth({ ...map, [info.id]: false });
    }
  };

  return (
    <TeethDiagram selectedTeeth={selectedTeeth} onChange={handleTeethChange} />
  );
}

export default App;
