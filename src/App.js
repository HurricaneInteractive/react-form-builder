import React from 'react';
import logo from './logo.svg';
import './App.css';

import FormBuilder, { string, number } from "./form-builder"

function App() {

  const form = FormBuilder({
    structure: {
      name: string(),
      email: string({ type: "email", value: "abc@abc.com" }),
      age: number(),
      // tooYoungMessage: msg("", { when: ['age', '<', 18] }),
      // optional
      // submit: submit("Send email")
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          {form.render()}
        </div>
      </header>
    </div>
  );
}

export default App;
