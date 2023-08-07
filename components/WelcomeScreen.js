import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function WelcomeScreen({ onProceed }) {
  return (
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcomeTitle}>Welcome to Personal Health Tracker!</Text>
      <Text style={styles.welcomeText}>
        This app helps you manage your fitness plan and caloric intake. Please use this app under your own risk and always consult a professional health advisor before making significant changes to your diet.
      </Text>
      <TouchableOpacity style={styles.proceedButton} onPress={onProceed}>
        <Text style={styles.proceedButtonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    lineHeight: 22,
    textAlign: 'center',
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
