import React from 'react'
import { View, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { styles } from './styles'

class InputText extends React.Component {

  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChangeText: PropTypes.func
  }

  static defaultProps = {
    label: '',
    value: '',
    onChangeText: () => {}
  }

  render() {
    return(
      <TextInput 
        placeholder={this.props.label}
        value={this.props.value} 
        onChangeText={this.props.onChangeText}
        style={styles.container}
      />
    )
  }
}

export default InputText