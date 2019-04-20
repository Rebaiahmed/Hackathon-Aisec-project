import React, { Component } from 'react';
import { Widget ,addResponseMessage,renderCustomComponent,addLinkSnippet  } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './App.css';
import logo from './logo.svg';
import moment from 'moment'
import io from "socket.io-client";
import Webcam from "react-webcam";
import axios from 'axios';

//import { database ,dbstore } from './firebase';
import './style.css'

//_____Import teh other components___________//
//import { WelcomeComponent } from './components/WelcomeComponent';

import QuizzComponent from './components/QuizzComponent';
import  WelcomeComponent from './components/WelcomeComponent';
import FaceDetectionComponent from './components/faceDetectionComponent';
import NotificationButton from './components/NotificationsButton';
import MapComponent from './components/MapsComponent';
import FaceDetectedComponent from './components/FaceDetectedComponent';
import AlertsComponent from './components/AlertsComponent';
import DetectlostComponent from './components/DetetcLost';
import AlerteMsgComponent from './components/AlertMessage';

import Tracking from '../src/MapMonuments';

import MonumentCompoennt from './components/MonumentComponent';
import RestaurantCompoennt from './components/RestauratnComponent';
const URL_SOCKET = 'localhost:3001'



class App extends Component {


  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 'index' :0 ,locationName: ''  ,messagesList :[], Quizz :[
      {'id:':0,'question_content':'Quel Est la date de votre marriage ?','reponse1':'13 aout 1978',
      'reponse2':'17 sept 1978','reponse3':'13 aout 1979','reponsecorrecte':'1'},
      {'id:':1,'question_content':'Quel Est le prénom de votre fille ?','reponse1':'Karim',
      'reponse2':'Foued','reponse3':'Adnen','reponsecorrecte':'3'},
      {'id:':2,'question_content':'Quand vous Avez eu votre retraite ?','reponse1':'2015',
      'reponse2':'2017','reponse3':'2018','reponsecorrecte':'1'}
    ]};
    this.socket = io('http://localhost:3001/');

    //__________________________________________//
    this.handleMap  =this.handleMap.bind(this);
    this.DisplayMap =this.DisplayMap.bind(this);
    this.DisplayQuizz = this.DisplayQuizz.bind(this);
    this.handleQuizz = this.handleQuizz.bind(this);

  

 
   //_______RECEIVE MESSAGE FROM THE BACK-END_______//
   this.socket.on('RECEIVE_MESSAGE', function(data){
     console.log('the data from the user' + JSON.stringify(data.type));
     switch(data.type)
     {
       case 'location' :
             console.log('ask about location');
             addResponseMessage("Merci de Suivre cet Map !");
             renderCustomComponent(MapComponent,{"handleMap":this.handleMap})
             break ;

      case 'face_recognition' :
             console.log('ask about persons' + this.capture);
             //addResponseMessage(data.text);
             renderCustomComponent(FaceDetectionComponent)
             break ;      
      

      case 'face_detected' :
             console.log('display face detected !!')
             renderCustomComponent(FaceDetectedComponent)
             addResponseMessage(data.text);
             break ; 


      case 'alerts' :
             console.log('display alerts here!!')
             renderCustomComponent(AlertsComponent,{"text":data.text})
             //addResponseMessage(data.text);
             break ;

      case 'quizz' :
             console.log('display QUIZZ here!!')
             renderCustomComponent(QuizzComponent)
             addResponseMessage(data.text);
             break ; 
             
      case '' :
             console.log('display QUIZZ here!!')
             renderCustomComponent(QuizzComponent)
             addResponseMessage(data.text);
             break ;        



       default:
             addResponseMessage(data.text);

     }
   
   });

    this.socket.on('RECEIVE_DATA', function(data){
      console.log("there is dataa" + data.length)
      
  });

    
  }

  componentDidMount() {
    
    //render the first Message
    renderCustomComponent(WelcomeComponent,{
  "DispMonument":this.DispMonument,"DisplayMap":this.DisplayMap,
"DispResto" :this.DispResto})







  }


  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);

   
    // Now send the message throught the backend API
    //send the Message to the API_________//
    var message = {};
    message.text =newMessage;
    this.socket.emit('SEND_MESSAGE', {
      message
    });
  }




  componentWillUnmount() {
    this.socket.close()
  }

  onChange(event)
  {
    console.log('event' + event)
    //this.setState({message: event.target.value});
    this.setState({...this.state.message, value: event.target.value});
    console.log('message is updating' + this.state.message)
  
  }

  //_____________Function to send a Message__________________//

sendMessage =(msgValue)=> {
  //e.preventDefault()
  //alert("send send !")
  var message ={
    'text' : msgValue,
    'parseDate' : moment().format('llll'),
    'id' : '_' + Math.random().toString(36),
    'type' :'user' ,
    'own' : true
  }
  
  //__________update the litst of messages_________
  this.setState({
    messagesList: [...this.state.messagesList,message]
  })
  this.socket.emit('SEND_MESSAGE', {
    message
  });
  
  
  
  }
  
  
  onReceiveMessage(message)
  {
  
    this.setState({
      messagesList: [...this.state.messagesList,message]
    })
  }
  
  
  
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
    var message ={
      'text' : newMessage,
      'parseDate' : moment().format('llll'),
      'id' : '_' + Math.random().toString(36),
      'type' :'user' ,
      'own' : true
    }
    
    //__________update the litst of messages_________
    /*this.setState({
      messagesList: [...this.state.messagesList,message]
    })*/
    this.socket.emit('SEND_MESSAGE', {
      message
    });
  
    //addResponseMessage(newMessage)
  }


  

  handleMap= param => e => {
   console.log('the params is' + JSON.stringify(param));
   //___check about the value 
   if(param.answer=="Oui")
   {
     addResponseMessage("Bon route , Je suis Toujours Pour Vous Aider :)");
   }else{
     var message ={};
     message.text="Person Perdu"
     message.pos = param.pos ;
     //____send en real time to server to notify patient helper !!
     this.socket.emit('PERSON_LOST', {
      message
    });

     
   }
};

//___________________________________//
handleQuizz = param => e => 
{
 
  
  let {Quizz,index} = this.state ;
  console.log('quizz is' + JSON.stringify(Quizz));
  console.log('malad answer' + param.answer);
  var message ={};
  

  if( index<Quizz.length && param.answer===(Quizz[index].reponsecorrecte)  )
  {
 
  
  message.score+=1;
  message.question=JSON.stringify(Quizz[index])
  /*this.socket.emit('SEND_SCORE', {
    message
  });*/
/*var firebaseRef = database.ref('score');
firebaseRef.push(message);*/
  //send data to socket.emit score a
  }else{
    message.score=-1;
    message.question=Quizz[index]
    /*this.socket.emit('SEND_SCORE', {
      message
    })*/

 
 

  }

    //____display THE NEXT QUIZZ_____//
 //___chekc if last QUIZZ 
 if(Quizz.length==index)
 {
   addResponseMessage("Merci Pour Votre Participation , vos résulats seront evaluées a toute l'heure");

 }else{

//____Save the SCORE_______________//
/*var firebaseRef = database.ref('scores');
var newStoreRef = firebaseRef.push();
newStoreRef.set({
  "question":Quizz[index],
  "score": message.score,
  "answer" :param.answer
});*/

  renderCustomComponent(QuizzComponent,{"Quizz":Quizz[index],
"id_quizz":Quizz[index], 'handleQuizz':this.handleQuizz});
this.setState({ index: this.state.index + 1 })
 }
  

 

}

//_____Functins for the First Interact____________________//

DisplayQuizz()
{
 
  //____display THE QUIZZ_____//
  //render the first Message
  let {Quizz,index} = this.state ;
  
  renderCustomComponent(QuizzComponent,{"Quizz":Quizz[index],
"id_quizz":Quizz[index], 'handleQuizz':this.handleQuizz});
this.setState({ index: this.state.index + 1 })
}

DisplayAlertes()
{
 
  //____display THE QUIZZ_____//
  //render the first Message
  renderCustomComponent(AlertsComponent,{})

}


DisplayMap()
{
 
  //____display THE QUIZZ_____//
  //render the first Message
  renderCustomComponent(MapComponent,{"handleMap":this.handleMap})
  //renderCustomComponent(DetectlostComponent,{"handleMap":this.handleMap})
  

}
//MonumentCompoennt

DispMonument()
{
 
  //____display THE QUIZZ_____//
  //render the first Message
  renderCustomComponent(MonumentCompoennt)
  //renderCustomComponent(DetectlostComponent,{"handleMap":this.handleMap})
  

}

DispResto()
{
 
  //____display THE QUIZZ_____//
  //render the first Message
  renderCustomComponent(RestaurantCompoennt)
  //renderCustomComponent(DetectlostComponent,{"handleMap":this.handleMap})
  

}


DisplayWbeCam()
{
 
  //____display THE QUIZZ_____//
  //render the first Message
  renderCustomComponent(FaceDetectionComponent,{})

}






  render() {
  
    return (
      <div className="container">




	

	<div className="container-fluid full-height">
		<div className="row row-height">
			<div className="col-lg-6 content-left">
				<div className="content-left-wrapper">
          <a href="index.html" id="logo"><img style={{width: "300px", height: "150px",  float: "right"}} src="./logo.png" alt="" width="70%" height="170%" /></a>
				
				
					<div>
						
					<Tracking />
					</div>
					
				</div>
		
			</div>

      <div class="col-lg-6 content-right" >
				<div style={{ textAlign : "center"}} class="content-right-wrapper">
				
					
						<div>
						
						<form id="wrapped" method="POST" action="survey.php" className="wizard-form" novalidate="novalidate">
						<input id="website" name="website" type="text" value=""></input>


           
							<div id="middle-wizard" className="wizard-branch wizard-wrapper">
								<div className="step wizard-step current">
									<h3 className="main_question wizard-header">recherche avancé</h3>
				
									<div className="form-group">
										
											<select className="form-control" name="country">
												<option value="">zone</option>
												<option value="mahdiya">mahdiya</option>
												<option value="tounes">tounes</option>
												<option value="manouba">manouba</option>
												
											                             
											</select>
										</div>
									</div>
									<div className="row">
										<div className="col-3">
											<div className="form-group">
												<input type="text" name="temps" class="form-control" placeholder="temps" />
											</div>
										</div>
										<div className="col-9">
											<div className="form-group radio_input">
												<label className="container_radio">ouvert
													<input type="radio" name="gender" value="Male" className="required" />
													<span className="checkmark"></span>
												</label>
												<label className="container_radio">fermer
													<input type="radio" name="gender" value="Female" className="required" />
													<span className="checkmark"></span>
												</label>
											</div>
										</div>
									</div>
									
								</div>
					
						
            <div id="bottom-wizard">
							
              <button type="button" name="forward" className="forward">chercher</button>
          
            </div>
						
				
						</form>
					
					
					</div>
					</div>
          </div>
        
			









</div>
</div>





<Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title="Patriflux"
          subtitle=""/>


      
    
      </div>
    );
  }
}

export default App;
