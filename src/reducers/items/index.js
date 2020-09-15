import { ADD_ITEM, UPDATE_ITEM, UNDO_ITEM, REDO_ITEM  } from '../../constants/action_types'


const initialState = {
  item: [],
  undo: [],
  redo: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return {
        ...state,
        item: [...state.item, action.payload],
        undo: [...state.undo, { type: ADD_ITEM }]
      }
    case UPDATE_ITEM:
      const arr = state.item
      arr.splice(action.payload, 1, { ...arr[action.payload], isCheck: !arr[action.payload].isCheck })
      return {
        ...state,
        item: arr,
        undo: [...state.undo, { type: UPDATE_ITEM, index: action.payload }]
      }
    case UNDO_ITEM:
      if (state.undo.length == 0) return state

      const lastItemUndo = state.undo.slice(-1)[0]
      const objItemUndo  = state.item.slice(-1)[0]
      const itemTempUndo = state.item
      const undoTempUndo = state.undo
      const redoTempUndo = state.redo

      undoTempUndo.pop()
      redoTempUndo.push({ ...lastItemUndo, payload: objItemUndo })

      if (lastItemUndo.type === ADD_ITEM ) {
        itemTempUndo.pop()
      } else if (lastItemUndo.type == UPDATE_ITEM) {
        itemTempUndo.splice(lastItemUndo.index, 1, { ...itemTempUndo[lastItemUndo.index], isCheck: !itemTempUndo[lastItemUndo.index].isCheck })
      }

      return {
        item: itemTempUndo,
        undo: undoTempUndo,
        redo: redoTempUndo
      }
    case REDO_ITEM:
      if (state.redo.length == 0) return state

      const lastItemRedo = state.redo.slice(-1)[0] 
      const itemTempRedo = state.item
      const undoTempRedo = state.undo
      const redoTempRedo = state.redo
      
      undoTempRedo.push(lastItemRedo)
      redoTempRedo.pop()

      if (lastItemRedo.type === ADD_ITEM) {
        itemTempRedo.push(lastItemRedo.payload)
      } else if (lastItemRedo.type === UPDATE_ITEM) {
        itemTempRedo.splice(lastItemRedo.index, 1, { ...itemTempRedo[lastItemRedo.index], isCheck: !itemTempRedo[lastItemRedo.index].isCheck })
      }
      return {
        item: itemTempRedo,
        undo: undoTempRedo,
        redo: redoTempRedo
      }
    default:
      return state
  }
}