import {React,Component} from "react";
import { Container } from "react-bootstrap";
import '../styles/addevent.css'

//import database
import db from './firestore';

class Create extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            start_date: '',
            end_date: '',
        };
    }

    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    };

    addEvent = e => {
        e.preventDefault();
        const userRef = db.collection('events').doc().set({
            array: {title: this.state.title, start_date: new Date(this.state.start_date), end_date: new Date(this.state.end_date)}
        });  
        this.setState({
            title: '',
            start_date: '',
            end_date: '',
        });
        alert("Event added successfully")
    };

    logoutHandler = e => {
        sessionStorage.removeItem('isAuth');
        sessionStorage.clear();
        window.location.reload();
    };


    render() {
        return (
            <Container className="newpost">
                <h2>Add Event</h2>
                <br></br>
                <form className="pbox">
                    <label>Title</label>
                    <input className="inp" name ='title' placeholder="Enter Title" wrap="hard" onChange={this.updateInput} value={this.state.title} required />
                    <label>Start Date</label>
                    <input className="inp" name ='start_date' placeholder="mm/dd/yy" wrap="hard" onChange={this.updateInput} value={this.state.start_date} required />
                    <label>End Date</label>
                    <input className="inp" name ='end_date' placeholder="mm/dd/yy" wrap="hard" onChange={this.updateInput} value={this.state.end_date} required />
    
                    <button type='submit' onClick={this.addEvent} className="submitbutto">Submit</button>
                </form>
                <br></br>
                <button onClick={this.logoutHandler}>logout</button>
            </Container>
        )
    }
}

export default Create;