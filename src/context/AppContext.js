import React, {Component} from 'react';

const AppContext = React.createContext();


export class AppProvider extends Component {
  state = {
    location: '',
    theme: 'light',
  }

  updateLocation = (location) => {
    this.setState({
      location: location,
    })
  }

  render(){
    const {children} = this.props;
    const {location, theme} = this.state;
    const {updateLocation} = this;

    return (
      <AppContext.Provider value={{
        location,
        theme,
        updateLocation,
      }}>
        {children}
      </AppContext.Provider>
    );
  }
}

export default AppContext;