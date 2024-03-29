import 'aframe';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';
// import ReactDOM from 'react-dom';
import slot from '../../resource/slotcard.png';
import cardbk from '../../resource/cardbk_b.png';

import store from '../../store/store';

class Cards extends React.Component {

  handleClick() {
    store.dispatch({ type: 'DECK_DRAW' });
    if(store.getState().deck.maindeck.length < 1) {
      store.dispatch({ type: 'DECK_SHUFFLE' });
    }
  }

  render () {
    const cardcount = store.getState().deck.maindeck.length;
    const percard = 0.002
    return (
      <Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'1.1 '+this.props.cardY+' '+(this.props.deskZ-0.5)} 
        scale='0.22 0.3 1'
        rotation='90 0 0' 
        material={{src: slot, side:'double', transparent:true}}>
        </Entity>

        <Entity geometry={{primitive: 'box'}} 
        position={'1.1 '+(this.props.cardY+cardcount*percard/2)+' '+(this.props.deskZ-0.5)} 
        scale={'0.2 '+cardcount*percard+' 0.28'}
        material={{color: '#333'}}>
        </Entity>

        <Entity geometry={{primitive: 'plane'}} 
        position={'1.1 '+(this.props.cardY+cardcount*percard+0.001)+' '+(this.props.deskZ-0.5)} 
        scale='0.2 0.28 1'
        rotation='90 180 0' 
        material={{src: cardbk, side:'double', transparent:true}}
        events={{click: () => this.handleClick()}}>
        </Entity>

      </Entity>
    );
  }
}

export default Cards;
