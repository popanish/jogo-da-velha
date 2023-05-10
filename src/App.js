import React from 'react';
import Card from './objects/Card';
import Player from './objects/Player';
import Header from '../src/components/Header'

function App() {
  return (
    <>
    <Header/>
    <Card>
    <Player player= "x"/>
    <Player player= "x"/>
    <Player player= "x"/>
    <Player player= "o"/>
    <Player player= "o"/>
      </Card>
    </>
  )
}

export default App;
