// src/components/UpdateExercise.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateExercise } from '../features/ExerciseSlice';

const UpdateExercise = () => {
  const exercises = useSelector((state) => state.exercises.exercises);
  const dispatch = useDispatch();
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [updatedExercise, setUpdatedExercise] = useState({ type: '', duration: '', calories: '' });

  const handleSelect = (exercise) => {
    setSelectedExercise(exercise);
    setUpdatedExercise(exercise);
  };

  const handleChange = (e) => {
    setUpdatedExercise({ ...updatedExercise, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateExercise(updatedExercise));
    setSelectedExercise(null);
  };

  return (
    <div>
      <h2>Update Exercise</h2>
      <p>Click me to edit:</p>
      <ul>
        {exercises.map((ex) => (
          <li key={ex.id} onClick={() => handleSelect(ex)}>
            {ex.type} - {ex.duration} minutes - {ex.calories} calories
          </li>
        ))}
      </ul>
      {selectedExercise && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="type"
            value={updatedExercise.type}
            onChange={handleChange}
            placeholder="Type of Exercise"
            required
          />
          <input
            type="number"
            name="duration"
            value={updatedExercise.duration}
            onChange={handleChange}
            placeholder="Duration (in minutes)"
            required
          />
          <input
            type="number"
            name="calories"
            value={updatedExercise.calories}
            onChange={handleChange}
            placeholder="Calories Burned"
            required
          />
          <button type="submit">Update Exercise</button>
        </form>
      )}
    </div>
  );
};

export default UpdateExercise;
