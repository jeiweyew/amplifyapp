import logo from './logo.svg';
import awsconfig from './aws-exports'
import { AmplifySignOut,withAuthenticator } from '@aws-amplify/ui-react'
import './App.css';
import Amplify from '@aws-amplify/core';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut/>
        <h2>Smart Wheelchair System</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App)
