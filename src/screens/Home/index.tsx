import React from 'react'

import { Button, Text, View } from 'react-native'
import { useColorScheme } from 'nativewind'
import { StatusBar } from 'expo-status-bar'

export default function Home() {
  const { toggleColorScheme, colorScheme } = useColorScheme()
  return (
    <View
      className={`bg-light flex-1 justify-center items-center dark:bg-dark`}
    >
      <StatusBar style="auto" />
      <View className="flex flex-row gap-2">
        <Text
          selectable={false}
          onPress={toggleColorScheme}
          className="dark:text-white mr-2"
        >
          {`Try clicking me! ${colorScheme === 'dark' ? '🌙' : '🌞'}`}
        </Text>
      </View>
    </View>
  )
}
