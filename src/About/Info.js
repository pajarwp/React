import React, {Component} from 'react';
import '../App.css';

class Info extends React.Component {
  render (){
    return (
    <div className="container" style={{marginLeft: "100px", marginRight:"100px", marginTop: "60px", marginBottom:"139px", border: "1pt solid #DEDEDE", borderRadius: "10px"}}>
      <div className="row">
        <div className="col-6" style={{marginTop: "31px", paddingLeft:"46px", marginBottom:"35px", paddingRight: "70px"}}>
            <span className="aboutme">About Me</span><br/>
            <p className="paragraf"> Hai! My name's Joko Widodo, known as President of <span className="a">Indonesia</span>.</p>
            <p className="paragraf">My Duty as President are mainly to ensures country stability and commute any spoken ideas from Indonesia.</p>
            <p className="paragraf">Hopefully, with my current position, I may serve Indonesia for good aim and purpose, and to have better of it.</p>
        </div>
        <div className="col-6" style={{marginTop: "31px", paddingLeft:"46px",marginBottom:"35px", paddingRight: "70px"}}>
            <span className="aboutme">Information</span><br/>
            <table style={{marginTop:"35px"}}>
                <tr>
                    <td style={{height:"40px",width:"90px"}}> Age</td>
                    <td style={{height:"40px",width:"298px"}}> :57</td>
                </tr>
                <tr>
                    <td style={{height:"40px",width:"90px",backgroundColor: "#E3E3E3"}}> Instagram</td>
                    <td style={{height:"40px",width:"298px",backgroundColor: "#E3E3E3"}}> : @jokowi</td>
                </tr>
                <tr>
                    <td style={{height:"40px",width:"90px"}}> Alamat</td>
                    <td style={{height:"40px",width:"298px"}}> : Istana Negara, Jakarta</td>
                </tr>
            </table>                    
        </div>
      </div>
    </div>      
    )
  }
}

export default Info;

