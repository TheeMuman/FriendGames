import React, { Component, useRef, useState } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import img from '@assets/test.jpg';


/*
class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      garbage: {
        count: 0
      }
    };
  }

  render(){

    const {garbage:g} = this.state;
    const {count:c} = g

    return(
      <div className='App'>
        <h1> Hello, World! {c} </h1>
        <img src={img}/>
        <button onClick = {() => this.setState({garbage: {count: c + 1}})}/>
      </div>
    );
  }
}*/

function AppComponent() {
  const [count, setCount] = useState(0);
  return (
    <div className='App'>  {/*
      <h1> Hello, World! {count} </h1>
      <img src={img} />
  <button onClick={() => setCount(count + 1)}>Button!</button>  */}
    <GetIDs/>
    </div>
  );
}

function GetIDs(){
  const [answer, setAnswer] = useState('test');
  const idRef1 = useRef();
  const idRef2 = useRef();
  return(
    <div className='IDclass'>
      <p>Input two steam IDs</p>
      <input type="text" ref = {idRef1}></input>
      <input type="text" ref = {idRef2}></input>
      <button onClick={() => setAnswer(Scrape(idRef1, idRef2))}>Get Shared Games</button>
      <p>{answer}</p>
    </div>
  );

}

function Scrape(ID1, ID2){
  let Games = [];
  let url1 = 'https://steamcommunity.com/profiles/' + '76561198066208630' + '/games/?tab=all';
  let url2 = 'https://steamcommunity.com/profiles/' + '76561198066208630' + '/games/?tab=all';
  
  //<div class="gameListRowItemName ellipsis">GameName</div>
  fetch(url1, {mode: 'no-cors'})
    .then(res => console.log(res));
  let getData = html =>{
    
  };
  
  Games = ['made it', ' i can show you what games you have but i cant decide for you'];
  console.log('fuck this');
  return(Games);
}


export default hot(module)(AppComponent);
