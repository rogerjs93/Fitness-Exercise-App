import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen'; 
import ProfileForm from './components/ProfileForm'; 
import AppScreen from './components/AppScreen'; 
import ExerciseSelectionScreen from './components/ExerciseSelectionScreen'; 
import SummaryScreen from './components/SummaryScreen'; 

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showProfile, setShowProfile] = useState(false);
  const [showApp, setShowApp] = useState(false);
  const [showExerciseScreen, setShowExerciseScreen] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [profile, setProfile] = useState(null);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [caloriesLeft, setCaloriesLeft] = useState(0);
  const [totalCaloriesBurned, setTotalCaloriesBurned] = useState(0);

  const reset = () => {
    setShowWelcome(true);
    setShowProfile(false);
    setShowApp(false);
    setShowExerciseScreen(false);
    setShowSummary(false);
    setProfile(null);
    setSelectedExercises([]);
    setCaloriesLeft(0);
    setTotalCaloriesBurned(0);
  };

  const handleProceedFromWelcome = () => {
    if (profile) {
      setShowWelcome(false);
      setShowApp(true);
    } else {
      setShowWelcome(false);
      setShowProfile(true);
    }
  };

  const handleSaveProfile = (userProfile) => {
    setProfile(userProfile);
    setShowProfile(false);
    setShowApp(true);
  };

  const handleProceedFromApp = () => {
    setShowApp(false);
    setShowExerciseScreen(true);
  };

  const handleProceedToSummary = (totalCalories) => {
    setTotalCaloriesBurned(totalCalories);
    setShowExerciseScreen(false);
    setShowSummary(true);
  };

  return (
    <>
      {showWelcome && <WelcomeScreen onProceed={handleProceedFromWelcome} />}
      {showProfile && <ProfileForm onSaveProfile={handleSaveProfile} profile={profile} />}
      {showApp && <AppScreen onCalculate={setCaloriesLeft} onProceed={handleProceedFromApp} profile={profile} />}
      {showExerciseScreen && <ExerciseSelectionScreen caloriesLeft={caloriesLeft} selectedExercises={selectedExercises} setSelectedExercises={setSelectedExercises} onProceedToSummary={handleProceedToSummary} />}
      {showSummary && <SummaryScreen totalCaloriesBurned={totalCaloriesBurned} selectedExercises={selectedExercises} onReset={reset} />} {/* Pass reset function here */}
    </>
  );
}

