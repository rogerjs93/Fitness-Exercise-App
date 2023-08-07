import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function SummaryScreen({ totalCaloriesBurned, selectedExercises, onReset }) {
  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryTitle}>Exercise Summary</Text>
      <Text style={styles.summaryText}>Total Calories Burned: {totalCaloriesBurned} kcal</Text>
      {selectedExercises.map((exercise, index) => (
        <View key={index} style={styles.exerciseContainer}>
          <Text style={styles.exerciseTitle}>{exercise.name}</Text>
          <Text style={styles.exerciseText}>Sets: {exercise.sets}</Text>
          <Text style={styles.exerciseText}>Reps: {exercise.reps}</Text>
          <Text style={styles.exerciseText}>Calories Burned: {exercise.calories} kcal</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.resetButton} onPress={onReset}>
        <Text style={styles.resetButtonText}>Start Again</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SummaryScreen;

const styles = StyleSheet.create({
  summaryContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  summaryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    lineHeight: 22,
    textAlign: 'center',
  },
  exerciseContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  exerciseText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  resetButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
