import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  exercises: [],
};

const ExerciseSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    addExercise: (state, action) => {
      state.exercises.push(action.payload);
    },
    deleteExercise: (state, action) => {
      state.exercises = state.exercises.filter(ex => ex.id !== action.payload);
    },
    updateExercise: (state, action) => {
      const index = state.exercises.findIndex(ex => ex.id === action.payload.id);
      if (index !== -1) {
        state.exercises[index] = action.payload;
      }
    },
  },
});

export const { addExercise, deleteExercise, updateExercise } = ExerciseSlice.actions;
export default ExerciseSlice.reducer;
