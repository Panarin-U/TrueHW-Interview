import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import { styles } from './styles'

class MiniButton extends React.Component {

  static propTypes = {
    label: PropTypes.string,
    onPress: PropTypes.func,
    color: PropTypes.string,
    widthPercentage: PropTypes.string,
  }

  static defaultProps = {
    label: '',
    onPress: () => {},
    color: '',
    widthPercentage: '50%'
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.container, { width: this.props.widthPercentage, backgroundColor: this.props.color, height: 45 }]} 
        onPress={() => this.props.onPress()}
      >
        <Text style={[styles.text, { fontSize: 12 }]}>{this.props.label}</Text>
      </TouchableOpacity>
    )
  }
}


export default MiniButton