import React, {Component} from 'react';
import AppContext from '../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBar extends Component {
  static contextType = AppContext;

  constructor(props){
    super(props); 
    this.state = {
      inputValue: '',
    }          
    this.handleOnChange = this.handleOnChange.bind(this);
  }  

  handleOnChange(e){    
    this.setState({
      inputValue: e.target.value,
    })
  }

  render(){
    const {updateLocation} = this.context;

    return(
      <form>
        <input type="text" 
          value={this.state.inputValue} 
          onChange={this.handleOnChange} 
          placeholder="Type your Location ..."
        />
        <button type="submit" onClick={(e) => {
          e.preventDefault();
          var location = this.state.inputValue;
          updateLocation(location);
          this.setState({
            inputValue: '',
          })
        }}>{
          <FontAwesomeIcon icon="search" size="lg"/>
        }</button>
      </form>
    );
  }
}

export default SearchBar;