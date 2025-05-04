"use client";
import { useState } from "react";

export default function Fighters() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Fighter Form</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter fighter name"
      />
      <p>Fighter name: {name}</p>
    </div>
  );
}
