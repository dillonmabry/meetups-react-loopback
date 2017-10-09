import React, {Component} from 'react';
import axios from 'axios';
import MeetupItem from './MeetupItem';

class Meetups extends Component {

	constructor() {
		super();
		this.state = {
			meetups: []
		}
	}
	
	componentWillMount() {
		this.getMeetups();
	}
	
	getMeetups() {
		axios.get(`${process.env.NODE_ENV === 'development' ? 'https://test-environment-dillonmabry.c9users.io' : ""}/api/meetups`)
		.then(response => {
			this.setState({meetups: response.data}, () =>
			{
				
			});
		})
		.catch((err) => {
			console.log(err)
		});
	}
	
	render() {
		const meetupItems = this.state.meetups.map((meetup, i) => 
		{
			return (
			  <MeetupItem key={meetup.id} item={meetup} />
			)
		})
	
		return (
		  <div>
		    <h2>Find Meetups</h2>
		    <ul className="collection">
		    {meetupItems}
		    </ul>
		  </div>
		)
	}
}

export default Meetups;
