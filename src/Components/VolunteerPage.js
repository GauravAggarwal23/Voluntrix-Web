import React from 'react';
  import Cards from './Cards';
import Sdata from './Sdata';
 
 
//console.log(Sdata[0]);
function ncard(val){
return (
  <Cards
        image={val.image}
        title={val.title}
        category={val.category}
        cost={val.cost}
    />
);
}
const heading ={
  padding: '30px 0',
  textAlign:'center',
  fontFamily:'"raleway", sans-serif',
  textTransform:'uppercase',
  fontSize:'1.5rem',
  letterSpacing:'2px',
  fontWeight:'500',
  color:'#868686',
  backgroundColor:'#fff',
  marginBottom:'30px',
}

const VolunteerPage = () => {
   
  
      
  return (

    
    <div> 
    <h1 style={heading}>List of Events</h1>
 {Sdata.map(ncard)}
    </div>
   
    
    
  )
}

export default VolunteerPage
