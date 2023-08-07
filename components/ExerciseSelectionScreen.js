import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';

function ExerciseSelectionScreen({ caloriesLeft, selectedExercises, setSelectedExercises, onProceedToSummary }) {
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [sets, setSets] = useState(1);
  const [reps, setReps] = useState(1);
  const exercises = {
    Back: ['Pull-ups', 'Bent-over Rows', 'Deadlifts'],
    Chest: ['Push-ups', 'Bench Press', 'Dumbbell Flyes'],
    Shoulders: ['Shoulder Press', 'Lateral Raises', 'Shrugs'],
    Arms: ['Bicep Curls', 'Tricep Dips', 'Hammer Curls'],
    Legs: ['Squats', 'Lunges', 'Leg Press'],
    Core: ['Crunches', 'Planks', 'Leg Raises'],
  };

  const calculateExerciseCalories = () => {
    return sets * reps * 0.1;
  };

  const handleAddExercise = () => {
    const exerciseCalories = calculateExerciseCalories();
    setSelectedExercises([...selectedExercises, { name: selectedExercise, sets, reps, calories: exerciseCalories }]);
  };

  const handleProceed = () => {
    const totalCaloriesBurned = selectedExercises.reduce((total, exercise) => total + exercise.calories, 0);
    onProceedToSummary(totalCaloriesBurned);
  };

  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.caloriesInfo}>Remaining Calories: {caloriesLeft} kcal</Text>
      <Picker selectedValue={selectedMuscle} onValueChange={(itemValue) => setSelectedMuscle(itemValue)} style={styles.picker}>
        {Object.keys(exercises).map((muscle, index) => (
          <Picker.Item key={index} label={muscle} value={muscle} />
        ))}
      </Picker>
      {selectedMuscle && (
        <Picker selectedValue={selectedExercise} onValueChange={(itemValue) => setSelectedExercise(itemValue)} style={styles.picker}>
          {exercises[selectedMuscle].map((exercise, index) => (
            <Picker.Item key={index} label={exercise} value={exercise} />
          ))}
        </Picker>
      )}
      {selectedExercise && (
        <View>
          <TextInput placeholder="Number of sets" keyboardType="numeric" value={sets.toString()} onChangeText={(text) => setSets(Number(text))} style={styles.input} />
          <TextInput placeholder="Number of repetitions" keyboardType="numeric" value={reps.toString()} onChangeText={(text) => setReps(Number(text))} style={styles.input} />
          <Text>Approximate calories burned: {calculateExerciseCalories()} kcal</Text>
          <TouchableOpacity style={styles.buttonContainer} onPress={handleAddExercise}>
            <Text style={styles.buttonText}>Add Exercise</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
        <Text style={styles.proceedButtonText}>Proceed to Summary</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ExerciseSelectionScreen;

const styles = StyleSheet.create({
  exerciseContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  caloriesInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  buttonContainer: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  proceedButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
