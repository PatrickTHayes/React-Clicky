import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1000,
    height:900,
    overflowY: 'auto',
  },
};
const imgStyle ={
    height:250
}

//shuffle function
const   shuffle =(array)=>{
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

const MyGridList = (props) => {
  console.log(props)
  return <div style={styles.root}>
    <GridList
      cellHeight={250}
      
      style={styles.gridList}
      cols={4}
    >
      <Subheader>Character Options, Choose Wisely</Subheader>
      
      {shuffle(props.array.map((tile,index) => (
      <div key={tile.key}onClick={() => {props.handleClick(index) }}>
        <GridTile
          place="hi"
          key={tile.key}
          title={tile.title}
          actionIcon={<IconButton ><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} style={imgStyle}/>
        </GridTile>
        </div>
      )))}
    </GridList>
  </div>

}
export default MyGridList;