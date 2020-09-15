import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 32,
    borderColor: 'white',
  },
  enable: {
    backgroundColor: '#039BE5',
  },
  disable: {
    backgroundColor: '#81D4FA'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  }
})