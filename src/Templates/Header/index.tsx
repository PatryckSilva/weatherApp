import { CityHeader } from '@/Components/CityHeader'
import { userPersonLocation } from '@/Hooks/usePersonLocation'
import { Text, View } from 'react-native'

export const Header = () => {
  const { location, errorMsg } = userPersonLocation()

  return (
    <View
      className={`flex items-center justify-center h-32 pt-10 bg-transparent`}
    >
      <CityHeader locations={location} />
    </View>
  )
}
