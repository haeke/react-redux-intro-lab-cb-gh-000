
import { combineReducers } from 'redux';
import inventoryListItems from './inventoryItemsReducer';

const rootReducer = combineReducers({
  inventoryListItems: inventoryListItems,
});

export default rootReducer;
