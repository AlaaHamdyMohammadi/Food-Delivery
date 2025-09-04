import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function signIn() {
  return (
    <View>
      <Text>signIn</Text>
      <Button title='Sign In' onPress={() => router.push("/sign-up")} />
    </View>
  )
}