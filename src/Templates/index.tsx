import { View } from 'react-native'
import { Header } from './Header'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'

export const MainTemplate = ({ children }) => {
  const { colorScheme } = useColorScheme()

  return (
    <View className={`flex-1 bg-light dark:bg-dark`}>
      <Header />
      {children}
      <StatusBar style={'auto'} />
    </View>
  )
}
