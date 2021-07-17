import { useState } from 'react';
import './App.css';
import './assets/Pacifico-Regular.ttf';



function App () {
  
const [ loanAmount, setLoanAmount ] = useState('');
const [ rate, setRate ] = useState( '' );
const [ duration, setDuration ] = useState( '' );

const interestRate = loanAmount * rate * duration / 100 ;
const interest_Rate = `$${ loanAmount * rate * duration / 100 }`;
const debt = `$${ +loanAmount + (+interestRate) }`;
  
return (
    <div className="first">
      <div className="main">

        <h1 className="logo">Daveloan</h1>
        
        <div className="form-wrapper">
          <div className="input">
              <label>Loan Amount</label>
            <input
              type="text"
              className="inner-text"
              placeholder="Enter only digits (Eg. 2000.50)"
              value={loanAmount.replace( /\D,/g, '' )}
              onChange={e => setLoanAmount( e.target.value )}>
              </input>
          </div>
          <div className="input">
              <label>Loan Duration</label>
              <input
                name="duration"
                className="inner-text"
                placeholder="Enter the duration in years (Eg. 1year)"
                value={duration.replace( /\D,/g, '' )}
                onChange={e => setDuration( e.target.value )}>
              </input>
          </div>
          <div className="input">
              <label>Interest Rate</label>
              <input
                type="text"
                className="inner-text"
                placeholder="Enter the rate in % (Eg. 15%)"
                value={rate.replace( /\D,/g, '' )}
                onChange={e => setRate( e.target.value )}>
              </input>
          </div>
        </div>

        <div className="second-wrapper">
          <div className="second-first">
              <h1>LOAN</h1>
              <h1>RATE</h1>
              <h1>DEBT</h1>
          </div>
       

        <div className="second-second">
          <h2>{ loanAmount }</h2>
          <h2>{ interest_Rate }</h2>
          <h2>{ debt }</h2>
        </div>
        </div>
        <footer>&copy; 2021 David Nweke. All rights reserved</footer>
      </div>
    </div>
  );
}

export default App;
