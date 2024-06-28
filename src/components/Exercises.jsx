// src/components/Exercises.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExercise, deleteExercise } from '../features/ExerciseSlice';
import UpdateExercise from './UpdateExercise';

const Exercises = () => {
  const exercises = useSelector((state) => state.exercises.exercises);
  const dispatch = useDispatch();
  const [exercise, setExercise] = useState({ type: '', duration: '', calories: '' });

  const handleChange = (e) => {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExercise({ ...exercise, id: Date.now() }));
    setExercise({ type: '', duration: '', calories: '' });
  };

  return (
    <div>
      <h1>Exercises</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="type"
          value={exercise.type}
          onChange={handleChange}
          placeholder="Type of Exercise"
          required
        />
        <input
          type="number"
          name="duration"
          value={exercise.duration}
          onChange={handleChange}
          placeholder="Duration (in minutes)"
          required
        />
        <input
          type="number"
          name="calories"
          value={exercise.calories}
          onChange={handleChange}
          placeholder="Calories Burned"
          required
        />
        <button type="submit">Add Exercise</button>
      </form>
      <ul>
        {exercises.map((ex) => (
          <li key={ex.id}>
            {ex.type} - {ex.duration} minutes - {ex.calories} calories
            <button onClick={() => dispatch(deleteExercise(ex.id))}>Delete</button>
          </li>
        ))}
      </ul>
      <UpdateExercise />
    </div>
  );
};

export default Exercises;
