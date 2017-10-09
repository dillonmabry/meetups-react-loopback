import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class MeetupAdd extends Component {
    
    addMeetup(newMeetup) {
        axios.request({
           method: 'post',
           url: `${process.env.NODE_ENV === 'development' ? 'https://test-environment-dillonmabry.c9users.io' : ""}/api/meetups`,
           data: newMeetup
        }).then(response => {
           this.props.history.push('/'); 
        }).catch(err =>
            toast.error("Error: "+err)
        );
    }
    
    onSubmit(e) {
        const newMeetup = {
            name: this.refs.name.value,
            city: this.refs.city.value,
            address: this.refs.address.value
        }
        
        this.addMeetup(newMeetup);
        e.preventDefault();
        
    }
    
    render() {
        return (
          <div>
            <br/>
            <Link className="btn" to="/">Back</Link>
            <h2>Add Meetup</h2>
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="input-field">
                    <input type="text" name="name" ref="name" />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="input-field">
                    <input type="text" name="city" ref="city" />
                    <label htmlFor="city">City</label>
                </div>
                <div className="input-field">
                    <input type="text" name="address" ref="address" />
                    <label htmlFor="address">Address</label>
                </div>
                <input type="submit" value="Save" className="btn blue" />
            </form>
            <div>
                <ToastContainer 
                  position="bottom-left"
                  progressClassName="transparent-progress" 
                  type="default"
                  hideProgressBar={true}
                  autoClose={2000}
                  newestOnTop={false}
                  closeOnClick
                  pauseOnHover
                />
            </div>
          </div>
        )
    }
}

export default MeetupAdd;