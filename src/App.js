import React from 'react';
// import logo from './logo.svg';

import { Cards, Chart, CountryPicker } from './components';
import './App.css';
import { fetchData }from './api';
 
// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import Logo from './img/CVD-19.png';

class App extends React.Component {
  state = {
    data : {},
    country : '',
  }


  async componentDidMount(){
    const fetchedata = await fetchData();

    this.setState({data : fetchedata});
  }

  handleCountryChange = async (country) => {
    const fetchedata = await fetchData(country);
    
    this.setState({data: fetchedata, country: country});
  }

  render(){
    const { data , country } = this.state;

    return(
      <div className="container">
        <img className="image" src={ Logo } alt="COVID-19"/>
        <Cards data={ data }/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
      </div>
      );
  }
}

export default App;
