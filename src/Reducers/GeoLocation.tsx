import { IGeoLocation, IGeoLocationAction } from '@/@types'
import { LocationGeocodedAddress } from 'expo-location'

export const GeoLocationReducer = (
  state: IGeoLocation,
  action: IGeoLocationAction
): IGeoLocation => {
  switch (action.type) {
    case 'SET_LOCATION':
      return {
        ...state,
        country: action.location.country,
        neighbourhood: action.location.district,
        numberHouse: action.location.name,
        state: action.location.region,
        street: action.location.street,
        city: action.location.subregion
      }

    default:
      return state
  }
}
