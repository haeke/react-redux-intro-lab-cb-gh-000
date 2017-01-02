import React from 'react'
import { shallow, mount} from 'enzyme'
import expect, { createSpy, spyOn, isSpy } from 'expect'
import ReactTestUtils from 'react-addons-test-utils'
import sinon from 'sinon'
import App from '../src/App'
import Game from '../src/Game'

import configureStore from 'redux-mock-store';
import { Provider, connect} from 'react-redux';

const initialState = {
  game: {
    winner: null,
    userCards: [],
    aiCards: [],
    deck: [
     {name:"Ace of Diamonds", value: 1},
     {name:"Ace of Spades", value: 1},
     {name:"Ace of Clubs", value: 1},
     {name:"Ace of Hearts", value: 1},
     {name:"Two of Diamonds", value: 2},
     {name:"Two of Spades", value: 2},
     {name:"Two of Clubs", value: 2},
     {name:"Two of Hearts", value: 2},
     {name:"Three of Diamonds", value: 3},
     {name:"Three of Spades", value: 3},
     {name:"Three of Clubs", value: 3},
     {name:"Three of Hearts", value: 3},
     {name:"Four of Diamonds", value: 4},
     {name:"Four of Spades", value: 4},
     {name:"Four of Clubs", value: 4},
     {name:"Four of Hearts", value: 4},
     {name:"Five of Diamonds", value: 5},
     {name:"Five of Spades", value: 5},
     {name:"Five of Clubs", value: 5},
     {name:"Five of Hearts", value: 5},
     {name:"Six of Diamonds", value: 6},
     {name:"Six of Spades", value: 6},
     {name:"Six of Clubs", value: 6},
     {name:"Six of Hearts", value: 6},
     {name:"Seven of Diamonds", value: 7},
     {name:"Seven of Spades", value: 7},
     {name:"Seven of Clubs", value: 7},
     {name:"Seven of Hearts", value: 7},
     {name:"Eight of Diamonds", value: 8},
     {name:"Eight of Spades", value: 8},
     {name:"Eight of Clubs", value: 8},
     {name:"Eight of Hearts", value: 8},
     {name:"Nine of Diamonds", value: 9},
     {name:"Nine of Spades", value: 9},
     {name:"Nine of Clubs", value: 9},
     {name:"Nine of Hearts", value: 9},
     {name:"Ten of Diamonds", value: 10},
     {name:"Ten of Spades", value: 10},
     {name:"Ten of Clubs", value: 10},
     {name:"Ten of Hearts", value: 10},
     {name:"Jack of Diamonds", value: 10},
     {name:"Jack of Spades", value: 10},
     {name:"Jack of Clubs", value: 10},
     {name:"Jack of Hearts", value: 10},
     {name:"Queen of Diamonds", value: 10},
     {name:"Queen of Spades", value: 10},
     {name:"Queen of Clubs", value: 10},
     {name:"Queen of Hearts", value: 10},
     {name:"King of Diamonds", value: 10},
     {name:"King of Spades", value: 10},
     {name:"King of Clubs", value: 10},
     {name:"King of Hearts", value: 10}
   ]
  }
}

function setup() {
  const mockStore = configureStore([]);
  const store = mockStore(initialState);
  const wrapper = shallow(<App store={store}/>)
  return {
    wrapper
  }
}

function setUpMount() {
  const mockStore = configureStore([]);
  const store = mockStore(initialState);
  const component = mount(<App store={store}/>)
  return {
    component
  }
}

describe('<App/>', function () {

  it('should have a prop, `game`, set via mapStateToProps', function() {
    const {wrapper} = setup()

    expect(wrapper.props().game).toEqual(initialState.game)
  })

  it('should render the Game component as a child', function () {
    const { wrapper } = setup()
    expect(wrapper.shallow().find('Game').length).toEqual(1)
  });


  it('should be connected to the store via the `connect` function', function() {
    const { wrapper } = setup()
    expect(wrapper.unrendered.type.displayName).toEqual('Connect(App)')
  })

  it('should use mapDispatchToProps to pass the action creator functions to the component under this.props.actions', function() {
    const { wrapper } = setup()
    expect(Object.keys(wrapper.node.props.actions)).toEqual(["executeRound", "resetGame"])
  })

  it('should dispatch the executeRound action creator when the components playRound function is called', function() {
    const {wrapper} = setup()
    const executeRound = sinon.spy(wrapper.shallow().instance().props.actions, 'executeRound')
    wrapper.shallow().instance().playRound()    
    expect(executeRound.calledOnce).toEqual(true)
  })

  it('should dispatch the resetGame action creator when the components reset function is called', function() {
    const {wrapper} = setup()
    const resetGame = sinon.spy(wrapper.shallow().instance().props.actions, 'resetGame')
    wrapper.shallow().instance().reset()    
    expect(resetGame.calledOnce).toEqual(true)
  })
 
});












