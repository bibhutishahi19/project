import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back" size={24} color="green" style={styles.backIcon} />
      <Text style={styles.title}>Register</Text>
      <Text style={styles.subtitle}>Create your new account</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={20} color="green" style={styles.inputIcon} />
        <TextInput placeholder="Full Name" style={styles.input} placeholderTextColor="#6D9F71" />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="green" style={styles.inputIcon} />
        <TextInput placeholder="Email" style={styles.input} placeholderTextColor="#6D9F71" keyboardType="email-address" />
        <Ionicons name="checkmark" size={20} color="green" style={styles.inputEndIcon} />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="green" style={styles.inputIcon} />
        <TextInput placeholder="Password" style={styles.input} placeholderTextColor="#6D9F71" secureTextEntry={true} />
        <Ionicons name="eye-outline" size={20} color="green" style={styles.inputEndIcon} />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        Already have an account? <Text style={styles.loginText}>Login</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8F4',
    padding: 20,
    justifyContent: 'center',
  },
  backIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6D9F71',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8FCE8',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'green',
  },
  inputIcon: {
    marginRight: 10,
  },
  inputEndIcon: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#6D9F71',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#6D9F71',
    marginTop: 20,
  },
  loginText: {
    color: 'green',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
