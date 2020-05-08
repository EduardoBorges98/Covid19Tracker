import React from 'react';

// import Cards from './components/Cards/Cards';
// import Charts from './components/Charts/Charts';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker,}  from './components';
import styles from './App.module.css';
import { fetchData, fetchCountries } from './api';
import dsa from './images/dsa.png';

class App extends React.Component {
    state = {
       data: {},
       country: '',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();

        this.setState({data: fetchedData})

    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        console.log(fetchedData)
        console.log(country)
        this.setState({data: fetchedData, country: country})
    }

    render(){
        const { data, country } = this.state;
        return(
            <div className={styles.container}>
                <img className={styles.image} src={dsa} alt="COVID-19"/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data}  country={country}/>
                  
            </div>
        )
    }
}

export default App;