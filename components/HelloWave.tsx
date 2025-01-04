import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const meals = [
  { name: 'Breakfast', time: '8:00 AM', calories: '400 kcal' },
  { name: 'Lunch', time: '1:00 PM', calories: '600 kcal' },
  { name: 'Snacks', time: '4:00 PM', calories: '200 kcal' },
  { name: 'Dinner', time: '8:00 PM', calories: '500 kcal' },
];

export function DietPlanner() {
  const progress = useSharedValue(0.5); // Example: 50% of the daily goal

  // Animated progress bar
  const progressStyle = useAnimatedStyle(() => ({
    width: withTiming(progress.value * width * 0.8, { duration: 1000 }),
  }));

  return (
    <LinearGradient colors={['#56CCF2', '#2F80ED']} style={styles.container}>
      <Text style={styles.title}>Diet Planner</Text>
      <View style={styles.progressBarContainer}>
        <Animated.View style={[styles.progressBar, progressStyle]} />
      </View>
      <Text style={styles.calorieGoal}>50% of Daily Goal Reached</Text>

      <ScrollView contentContainerStyle={styles.mealList}>
        {meals.map((meal, index) => (
          <Animated.View
            key={index}
            style={[
              styles.mealCard,
              {
                backgroundColor: index % 2 === 0 ? '#f9fafc' : '#eef1f7',
              },
            ]}
          >
            <Text style={styles.mealName}>{meal.name}</Text>
            <Text style={styles.mealTime}>{meal.time}</Text>
            <Text style={styles.mealCalories}>{meal.calories}</Text>
          </Animated.View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  progressBarContainer: {
    height: 10,
    width: width * 0.8,
    backgroundColor: '#ffffff50',
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  calorieGoal: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  mealList: {
    paddingVertical: 10,
  },
  mealCard: {
    marginBottom: 15,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mealName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  mealTime: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  mealCalories: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});
