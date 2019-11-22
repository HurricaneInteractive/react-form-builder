import React from 'react';
import './App.css';

import FormBuilder, { string, number, text, submit, msg } from "./form-builder"

const TestMessage = () => <p>Age must be above <strong>17</strong></p>

function App() {

  const form = FormBuilder({
    structure: {
      name: string(),
      email: string({ type: "email", value: "abc@abc.com" }),
      age: number(),
      message: text({ rows: 6 }),
      tooYoungMessage: msg(TestMessage, { when: ['age', '<', 18] }),
      // optional
      submit: submit({ value: "Send Email" })
    },
    events: {
      submit: (state) => {
        console.log("Submit Form", { state })
      },
      change: (state) => {
        console.log("On Change", { state })
      }
    },
  })

  return (
    <div className="App">
      <main>
        {form.render()}
      </main>
    </div>
  );
}

export default App;
