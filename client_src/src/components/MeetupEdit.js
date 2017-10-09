import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MeetupEdit extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name:'',
            city:'',
            address:''
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    componentWillMount() {
        this.getMeetupDetails();
    }
    
    editMeetup(newMeetup) {
         axios.request({
           method: 'put',
           url: `${process.env.NODE_ENV === 'development' ? 'https://test-environment-dillonmabry.c9users.io' : ""}/api/meetups/${this.state.id}`,
           data: newMeetup
        }).then(response => {
           this.props.history.push('/'); 
        }).catch(err => console.log(err));
    }

    onSubmit(e) {
        const newMeetup = {
            name: this.refs.name.value,
            city: this.refs.city.value,
            address: this.refs.address.value
        }
        
        this.editMeetup(newMeetup);
        e.preventDefault();
    }
    
    getMeetupDetails() {
        let meetupId = this.props.match.params.id;
        axios.get(`${process.env.NODE_ENV === 'development' ? 'https://test-environment-dillonmabry.c9users.io' : ""}/api/meetups/${meetupId}`)
		.then(response => {
			this.setState({
			    id: response.data.id,
			    name: response.data.name,
			    city: response.data.city,
			    address: response.data.address
			});
		})
		.catch(err => console.log(err));
    }
    
    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }
    
    render() {
        return (
          <div>
            <br/>
            <Link className="btn" to="/">Back</Link>
            <h2>Edit Meetup</h2>
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="input-field">
                    <input type="text" name="name" ref="name" 
                        value={this.state.name} onChange={this.handleInputChange} />
                    <label htmlFor="name" className="control-label active">Name:</label>
                </div>
                <div className="input-field">
                    <input type="text" name="city" ref="city" 
                        value={this.state.city} onChange={this.handleInputChange} />
                    <label htmlFor="city" className="control-label active">City:</label>
                </div>
                <div className="input-field">
                    <input type="text" name="address" ref="address" 
                        value={this.state.address} onChange={this.handleInputChange} />
                    <label htmlFor="address" className="control-label active">Address:</label>
                </div>
                <input type="submit" value="Save" className="btn blue" />
            </form>
          </div>
        )
    }
}

export default MeetupEdit;