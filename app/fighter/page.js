import { useState } from "react";

export default function Fighters() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weightClass, setWeightClass] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState(null);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Fighter Registered!");
    console.log({ name, age, weightClass, bio, image });
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl mb-6">Register Your Fighter Profile</h1>

      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg">Fighter Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter fighter's name"
            required
          />
        </div>

        <div>
          <label className="block text-lg">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter age"
            required
          />
        </div>

        <div>
          <label className="block text-lg">Weight Class</label>
          <input
            type="text"
            value={weightClass}
            onChange={(e) => setWeightClass(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter weight class"
            required
          />
        </div>

        <div>
          <label className="block text-lg">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter fighter's bio"
            required
          />
        </div>

        <div>
          <label className="block text-lg">Profile Picture</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full p-2 border rounded"
          />
        </div>

        <button type="submit" className="w-full p-3 mt-4 bg-blue-500 text-white rounded">
          Submit Fighter Profile
        </button>
      </form>
    </div>
  );
}
