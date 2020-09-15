import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    paddingHorizontal: 16
  },
  fontHeader: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  textInput: {
    width: '100%',
    height: 60,
    borderColor: 'black',
    borderWidth: 1
  },
  btn: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 30,
    marginTop: 32,
  },
  row: {
    width: '100%',
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: 16,
    backgroundColor: '#FF7043',
    borderRadius: 16,
    marginBottom: 8
  },
  font: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  fontUnderline: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine: 'underline'
  },
  flexRow: {
    marginTop: 8,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textCount: {
    fontSize: 18,
    textAlign: 'right'
  }
})