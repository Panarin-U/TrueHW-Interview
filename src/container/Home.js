import React from 'react'
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { ADD_ITEM, UPDATE_ITEM, UNDO_ITEM, REDO_ITEM } from '../constants/action_types'
import { styles } from './styles'
import { InputText, Button, MiniButton } from '../common'

const filterState = {
  all: 'ALL',
  active: 'ACTIVE',
  complete: 'COMPLETE',
}

class HomeContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      type: filterState.all,
      text: ''
    }
  }

  onChangeText = (text) => {
    this.setState({ text: text })
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity 
        style={styles.row} 
        key={`${item.text}${index}`}
        onPress={() => {
          this.props.update(index)
          this.setState({})
        }}
      >
        <Text style={!item.isCheck ? [styles.font, { textDecorationLine: 'underline line-through' }] : styles.font}>{item.text}</Text>
      </TouchableOpacity>
    )
  }

  getList() {
    const { type } = this.state
    switch(type) {
      case filterState.all:
        return this.props.item
      case filterState.active:
        return this.props.item.filter(d => d.isCheck)
      case filterState.complete:
        return this.props.item.filter(d => !d.isCheck)
    }
  }

  updateType = (type) => {
    this.setState({ type })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={{ height: 60 }} />
          <Text style={styles.fontHeader}>Add Shoping List</Text>
          <View style={{ height: 8 }} />
          <InputText 
            label='Enter Keyword'
            value={this.state.text}
            onChangeText={this.onChangeText}
          />
          <View style={{ height: 16 }}/>
          <Button 
            enable={!!this.state.text}
            label='ADD' 
            onPress={() => {
              this.props.addItem({ isCheck: true, text: this.state.text })
              this.setState({ text: '' })
            }}
          />
          <View style={{ height: 8 }}/>
          <Text style={styles.textCount}>{`${this.getList().length} ${ this.getList().length > 1 ? 'items' : 'item'}`}</Text>
          <View style={{ height: 8 }}/>
          <FlatList
            keyExtractor={(item) => item.text}
            style={{ width: '100%', height: 100 }}
            data={this.getList()}
            renderItem={this.renderItem}
          />
          <View style={styles.flexRow}>
            <MiniButton
              label='all'
              onPress={() => this.updateType(filterState.all)}
              color={this.state.type == filterState.all ? '#455A64' : '#90A4AE'}
              widthPercentage='30%'
            />
            <MiniButton
              label='active'
              onPress={() => this.updateType(filterState.active)}
              color={this.state.type == filterState.active ? '#455A64' : '#90A4AE'}
              widthPercentage='30%'
            />
            <MiniButton
              label='complete'
              onPress={() => this.updateType(filterState.complete)}
              color={this.state.type == filterState.complete ? '#455A64' : '#90A4AE'}
              widthPercentage='30%'
            />
          </View>
          <View style={styles.flexRow} >
          <MiniButton
            onPress={() => {
              this.props.undo()
              this.setState({})
            }}
            label='Undo'
            color='#5D4037'
            widthPercentage='45%'
          />
          <MiniButton
            onPress={() => {
              this.props.redo()
              this.setState({})
            }}
            label='Redo'
            color='#5D4037'
            widthPercentage='45%'
          />
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  item: state?.items.item ?? []
})

const mapDispatchToProps = dispatch => ({
  addItem: (data) => dispatch({ type: ADD_ITEM, payload: data }),
  update: (index) => dispatch({ type: UPDATE_ITEM, payload: index }),
  undo: () => dispatch({ type: UNDO_ITEM }),
  redo: () => dispatch({ type: REDO_ITEM })
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)