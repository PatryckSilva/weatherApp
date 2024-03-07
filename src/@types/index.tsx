import { LocationGeocodedAddress } from 'expo-location'

export interface IGeoLocation {
  country: string
  neighbourhood: string
  numberHouse: string
  state: string
  street: string
  city: string
}

export interface IGeoLocationAction {
  type: GeoLocationActionTypes.SET_LOCATION
  location: LocationGeocodedAddress
}

export enum GeoLocationActionTypes {
  SET_LOCATION = 'SET_LOCATION'
}
