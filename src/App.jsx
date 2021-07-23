import { Component } from 'react';
import MainPage from './components/_pages/MainPage.jsx';
import TransactionPage from './components/_pages/TransactionPage.jsx';
import './App.css';

class App extends Component {
  state = {
    transType: ""
  };

  handleOpenTransaction = (type) => this.setState({ transType: type });
  
  handleCloseTransaction = () => this.setState({ transType: "" });

  render() {
    const { transType } = this.state;
    return (
    <>
        {!transType ?
          <MainPage handleOpenTransaction={this.handleOpenTransaction} />
          :
          <TransactionPage transType={transType} handleCloseTransaction={this.handleCloseTransaction} />
        }
    </>
  );
  }
}

export default App;
