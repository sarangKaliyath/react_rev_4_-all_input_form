import "./App.css";
import { useState } from "react";
import { Form } from "./Components/Form";
import { ShowFormData } from "./Components/ShowFormData";

function App() {
  const [formData, setFormData] = useState([]);

  return (
    <div>
      <Form formData={formData} setFormData={setFormData} />
      <ShowFormData formData={formData} />
    </div>
  );
}

export default App;
