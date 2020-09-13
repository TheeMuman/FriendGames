import React, { Component, useRef, useState } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
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
    <DrawGame name='game of the name' gameImage={img}/>
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
  let url1 = 'https://cors-anywhere.herokuapp.com/steamcommunity.com/profiles/' + '76561198066208630' + '/games/?tab=all';
  let url2 = 'https://cors-anywhere.herokuapp.com/steamcommunity.com/profiles/' + '76561198066208630' + '/games/?tab=all';
  
  //<div class="gameListRowItemName ellipsis">GameName</div>
  //id = "games_list_rows"
  fetch(url1)
    .then(function (res){
      console.log(res);
      return res.text();
    }).then(function (data){
      console.log('this is our html i think\n', data);
      var list = [];
      

    }).catch (function(err){
      console.warn('There was an error', err);
    });

  Games = ['made it', ' i can show you what games you have but i cant decide for you'];
  console.log('fuck this');
  return(Games);
}

function DrawGame(props){
  let name = props.name;
  let gameImage = props.gameImage;
  return(
    <div>
      <p>{name}</p>
      <img src={gameImage} style={{width:'10rem'}}/>
    </div>
  );

}


export default hot(module)(AppComponent);
