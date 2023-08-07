import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';

const calculateCaloricNeeds = (age, weight, height, gender, exerciseDays) => {
  let bmr;

  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const exerciseMultipliers = [1.2, 1.375, 1.55, 1.725];
  const multiplier = exerciseMultipliers[exerciseDays] || 1.2;

  return bmr * multiplier;
};

export default function AppScreen({ onCalculate, onProceed }) {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [exerciseDays, setExerciseDays] = useState('');
  const [calories, setCalories] = useState('');

  const handleCalculate = () => {
    const calculatedCalories = calculateCaloricNeeds(age, weight, height, gender, exerciseDays);
    setCalories(calculatedCalories);
    alert(`Your daily caloric needs are ${calculatedCalories} calories.`);
    onCalculate(calculatedCalories);
    onProceed();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Age" keyboardType="numeric" value={age} onChangeText={setAge} style={styles.input} />
      <TextInput placeholder="Weight (kg)" keyboardType="numeric" value={weight} onChangeText={setWeight} style={styles.input} />
      <TextInput placeholder="Height (cm)" keyboardType="numeric" value={height} onChangeText={setHeight} style={styles.input} />
      <Text style={styles.label}>Gender:</Text>
      <Picker selectedValue={gender} onValueChange={(itemValue) => setGender(itemValue)} style={styles.picker}>
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>
      <TextInput placeholder="How many days per week do you exercise?" keyboardType="numeric" value={exerciseDays} onChangeText={setExerciseDays} style={styles.input} />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleCalculate}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      <Text>Your calculated daily caloric needs: {calories}</Text>
      <Text style={styles.instructionText}>Enter your details above to calculate your daily caloric needs. This will help us tailor an exercise plan for you.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 20,
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
  instructionText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
});
