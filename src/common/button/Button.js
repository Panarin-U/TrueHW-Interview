import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import { styles } from './styles'

class Button extends React.Component {

  static propTypes = {
    label: PropTypes.string,
    onPress: PropTypes.func,
    enable: PropTypes.bool
  }

  static defaultProps = {
    label: '',
    onPress: () => {},
    enable: true
  }

  render() {
    return (
      <TouchableOpacity 
        style={[styles.container, this.props.enable ? styles.enable : styles.disable]} 
        onPress={() => this.props.onPress()}
        disabled={!this.props.enable}
      >
        <Text style={styles.text}>{this.props.label}</Text>
      </TouchableOpacity>
    )
  }
}


export default Button