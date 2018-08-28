import React, {Component} from 'react';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'enter your name',
            state: '',
            bio: 'enter your bio',
            states: []
        }
    }

    // called after mounting v.dom to real dom
    // view ready
    componentDidMount() {
        // ajax call
        //fetch is browser standard api
        window.fetch("http://localhost:7070/api/states")
              .then (response => response.json() )
              .then ( states => {
                  console.log('all states', states);
                  this.setState({
                      states: states
                  })
              })
    }

    onValueChange = (event) => {
        const control = event.target;
        let {name, value} = control;

        

        console.log("value change ", name, value)
        this.setState({
            [name]: value
        })
    }

    render() {
        console.log('Profile render')
        return (
            <div>
                <h2>Profile</h2>
                <form>
                    <label>Name</label>
                    <input name="name" 
                            type="text"
                             
                            value={this.state.name}
                            onChange={this.onValueChange}
                            
                            />

                    <label>State</label>
                    <select name="state"
                            onChange={this.onValueChange}
                    >

                    {
                        this.state.states.map (s => (
                            <option value={s.code}
                                    key={s.code}
                            >
                                {s.name}
                            </option>
                        ))
                    }

                    </select>

                    <label>Bio</label>
                    <textarea name="bio"
                              onChange={this.onValueChange}
                              value= {this.state.bio}
                    >
                       
                    </textarea>

                </form>
            </div>
        )
    }
}