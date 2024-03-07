import { GeoLocationActionTypes } from '@/@types'
import { GeoLocationReducer } from '@/Reducers/GeoLocation'
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
  reverseGeocodeAsync
} from 'expo-location'
import { useEffect, useReducer, useState } from 'react'
export const userPersonLocation = () => {
  const [errorMsg, setErrorMsg] = useState<string>('')

  const [location, dispatchLocation] = useReducer(GeoLocationReducer, {
    city: '',
    country: '',
    neighbourhood: '',
    numberHouse: '',
    state: '',
    street: ''
  })

  const getLocation = async () => {
    const { granted } = await requestForegroundPermissionsAsync()

    if (granted) {
      const currentPosition = await getCurrentPositionAsync()

      if (currentPosition) {
        const regionName = await reverseGeocodeAsync({
          latitude: currentPosition.coords.latitude,
          longitude: currentPosition.coords.longitude
        })

        dispatchLocation({
          type: GeoLocationActionTypes.SET_LOCATION,
          location: regionName[0]
        })
        return
      }

      setErrorMsg('Location permission not granted')
      return
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return {
    location,
    errorMsg
  }
}
