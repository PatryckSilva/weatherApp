import { Text, TouchableOpacity } from 'react-native'

export const ButtonStyled = ({ title, ...rest }) => {
  return (
    <TouchableOpacity className={`p-5 bg-green-400`} {...rest}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}
