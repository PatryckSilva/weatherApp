import { IGeoLocation } from '@/@types'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useColorScheme } from 'nativewind'
export const CityHeader = ({ locations }: { locations: IGeoLocation }) => {
  const { colorScheme } = useColorScheme()
  return (
    <View className="px-4 w-full flex-row gap-1.5 items-end">
      <Ionicons
        name="location-outline"
        size={30}
        color={colorScheme === 'dark' ? 'white' : 'black'}
        className="text-4xl"
      />
      <Text className={`text-lg text-black dark:text-white`}>
        {locations.city}
      </Text>
    </View>
  )
}
