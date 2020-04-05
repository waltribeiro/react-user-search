// this makes the API call for us at the URL
// puts the users in some kind of list
// handles the search box
// "mount" means "loaded"

import React, {Component} from 'react';
import API from '../utils/api.js';
import DataTable from './DataTable';

export default class DataArea extends Component{
    constructor() {
        super();
        this.state = {
            users:[{}],
            headings:
                [
                    {name: "images"},
                    {name: "name"},
                    {name: "phone"},
                    {name: "email"},
                    {name: "dob"}
                ]
        }
    }
    componentDidMount() {
        API.getUsers().then(results => {
        //     console.log(results)
        //     console.log(results.data.results[0])
            this.setState({
                users: results.data.results
            })
            // console.log(results.data.results[0].name)
            // console.log(results.data.results[0].name.first + " " + results.data.results[0].name.last)
        }) 
    }

    render() {
        return (
            <>
                <DataTable
                headings={this.state.headings}
                users={this.state.users}
                />
            </>
        )
    }
}