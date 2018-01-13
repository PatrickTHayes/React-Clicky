import React, {Component} from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import MyGridList from './components/GridList';


//const Main = () => (
class Main extends Component {
 imgLink="http://lorempixel.com/400/200/sports";
 array=[
   {img:"http://assets.viewers-guide.hbo.com/large5996f710e08f6.jpg",title:"cersei-lannister", clicked:false,key:0},
   {img:"http://assets.viewers-guide.hbo.com/large59944e7d84b41.jpg",title:"tyrion-lannister", clicked:false, key:1},
   {img:"http://assets.viewers-guide.hbo.com/large5525a8194b458.jpg", title: "Varys", clicked:false, key:2},
   {img:"http://assets.viewers-guide.hbo.com/large596fb4ff5cdd5.jpg", title: "arya-stark", clicked:false, key:3},
   {img:"http://assets.viewers-guide.hbo.com/large571e48ee8ff66.jpg",title:"yara-greyjoy", clicked:false,key:4},
   {img:"http://assets.viewers-guide.hbo.com/large553030ad498cd.jpg",title:"brienne-tarth", clicked:false, key:5},
   {img:"http://assets.viewers-guide.hbo.com/large59824b2079116.jpg", title: "jaime-lannister", clicked:false, key:6},
   {img:"http://assets.viewers-guide.hbo.com/large552ea695c3cb5.jpg", title: "bronn", clicked:false, key:7},
   {img:"http://assets.viewers-guide.hbo.com/large59a03886ee5e7.jpg",title:"sansa-stark", clicked:false,key:8},
   {img:"http://assets.viewers-guide.hbo.com/large554a9113ad593.jpg",title:"tormund-giantsbane", clicked:false, key:9},
   {img:"http://assets.viewers-guide.hbo.com/large59824b1a59825.jpg", title: "jon-snow", clicked:false, key:10},
   {img:"http://assets.viewers-guide.hbo.com/large5996f713bfa76.jpg", title: "sandor-the-hound-clegane", clicked:false, key:11}
   ]
 
 /*(()=>{
   this.array.map((obj,index)=>{obj.key=index}
 )})()*/

 state = {
  score:0,
  topScore:0,
  array:this.array
  
}
//methods
// unbiased shuffle method ES6
  resetGameL=()=>{
    let tempArr=this.array.map(element=>{
      element.clicked=false;
      return element;
    });
    
    this.setState({
      score:0,
      array:tempArr
    })
  }
  resetGameW=(tempVal)=>{
    alert("you got them all, GOOD Job. Play Again!");
    let tempArr=this.array.map(element=>{
      element.clicked=false;
      return element;
    });

    this.setState({
      score:0,
      array:tempArr,
      topScore:tempVal
    })
  }

 handleClick=id=>{
  if (this.state.array[id].clicked===false){
    console.log('not clicked yet');
    let tempVal=this.state.score + 1;
    let tempArr=this.state.array;
    tempArr[id].clicked=true;
    
    if(tempVal>this.state.topScore){ //higher than top score, set val after check for a win... Cant reach this code after a win!
      if (tempVal===this.state.array.length){ //if win, unique reset cant use resetGame() since setState is used
        this.resetGameW(tempVal);
      }else{
      this.setState({ //higher than top score but not a Win
        score:tempVal,
        topScore:tempVal,
        array:tempArr
      })}
    }else{// increase score but not higher than top score
    //check for win if they already won once
      if (tempVal===this.state.array.length){ //if win, unique reset cant use resetGame() since setState is used
        this.resetGameW(tempVal);
      }else{
        
        this.setState({
          score:tempVal,
          array:tempArr
        })
        
      }
      
    }
  }else{
    alert("oh no, you lost. Play again!");
    this.resetGameL();
  }
  
}
//<Mycard imgLink="http://lorempixel.com/400/200/sports" />


  render(){
        return (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
  <div style={{backgroundColor:"darkslategrey"}}>
    <AppBar title="Clicky Game" style={{textAlign:"center"}}/>  
  
    <h1 style={{textAlign: "center"}}> Your Score: {this.state.score}<br/> Top Score: {this.state.topScore}</h1>

    <MyGridList array={this.array} handleClick={this.handleClick} />
  </div>
  </MuiThemeProvider>
);
}}
export default Main;