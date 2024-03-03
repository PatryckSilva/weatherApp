import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import { Button, Text, View } from 'react-native'

export default function Home() {
  const { toggleColorScheme, colorScheme } = useColorScheme()

  console.log(`colorScheme`, colorScheme)
  return (
    <View
      className={`bg-black dark:bg-white flex-1 justify-center items-center`}
    >
      <StatusBar style="auto" />
      <View>
        <Text className={`text-white dark:text-black`}>
          Welcome to Nativewind
        </Text>
        <Button onPress={toggleColorScheme} title="Change Theme" />
      </View>
    </View>
  )
}
