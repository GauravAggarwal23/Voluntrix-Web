import React from 'react';
 
import AlertDialogSlide from './ApplyButton';

const Cards = (props) => {
     

    const stylecard ={
        height:'auto',
       width:'100%',
    }
    const card_img ={
        width:'100%',
        height:'235px',
        borderTopLeftRadius:'12px',
        borderTopRightRadius:'12px',
    }
    const card_info={
        backgroundColor:'#fff',
        borderTopLeftRadius:'12px',
        borderTopRightRadius:'12px',
        padding:'16px 24px 24px 24px',
    }
    const card_category={
        textTransform:'uppercase',
        fontSize:'13px',
        letterSpacing:'2px',
        fontWeight:'500',
        color:'#868686',
        backgroundColor:'#fff',
        fontFamily:'"raleway", sans-serif',
    }
    const card_title ={
        marginTop:'5px',
        marginBottom:'10px',
        textTransform:'capitalize',
        backgroundColor:'#fff',
        fontFamily:'"raleway", sans-serif',
    }
    const card= {
      //  display:'flex',
      //   justifyContent: 'space-between',
        margin:'6%',
         transition: 'all 0.4s cubic-bezier(0.175,0.885,0,1)',
       backgroundColor:"#fff",
        borderRadius:'12',
         width:'21.25%',
        boxShadow:'0px 13px 10px -7px rgba(0,0,0,0.1)',
        float: 'left',
        "&:hover": {
            boxShadow: '0px 30px 18px -8px rgba(0,0,0,0.1)',
            transform:'scale(1.05,1.05)',
          }
        //   @media(max-width: 768px) {
        //    float:'none',
        //    margin:'5%',
        //    width:'90%',
        //   }
       
        }
 
    const buttonstyle={
        padding: '5px 8px',
        
        fontFamily:'"raleway", sans-serif',
        textTransform:'uppercase',
        fontSize:'13px',
        letterSpacing:'2px',
        fontWeight:'500',
        color:'#868686',
        backgroundColor:'#fff',
        outline:'none',
        border:'1px solid black',
        cursor:'pointer',
    }
    // const learnbutton={
    //     padding: '5px 8px',
    //     fontFamily:'"raleway", sans-serif',
    //     textTransform:'uppercase',
    //     fontSize:'13px',
    //     letterSpacing:'2px',
    //     fontWeight:'500',
    //     color:'#868686',
    //     backgroundColor:'#fff',
    //     outline:'none',
    //     border:'1px solid black',
    //     cursor:'pointer',
    //     marginLeft:'1%',
    // }
    
  return (
    <> 
    <div className='cards' style={stylecard}>
        <div className='card'  style={card}>
            <img src={props.image} alt='annual_fest' style={card_img}></img>
            <div   style={card_info}>
            <h3   style={card_title}>{props.title}</h3>
                <span style={card_category}>{props.category} </span>
                <h6  style={card_category}>{props.cost}</h6>
              <AlertDialogSlide/> 
            </div>
        </div>
        
    </div>
 </>
  )
}

export default Cards
