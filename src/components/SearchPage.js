import React, { Component } from "react";
import {browserHistory} from 'react-router';
import SearchList from './SearchList.js';
import './SearchPage.css';

export default class SearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            planetData: [],
            searchPlanetData: [],
            planetDetail:null
        };
        this.logoutUser = this.logoutUser.bind(this);
    }
    componentDidMount() {
        if (localStorage.getItem("username") == "") {
			browserHistory.goBack();
        }
        else {
            this.getSelectUserPlanets()
        }
        
    }
    updateSearch = (e) => {
        this.setState({search: e.target.value})
        var array = this.state.searchPlanetData.filter(parseResult => {
			return parseResult.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
        });
		this.setState({planetData: array});
      }
     getSelectUserPlanets() {
        fetch("https://swapi.co/api/planets/").then(response => response.json()).then(data=> {
           var resultData = data.results.sort((a,b) => parseInt(a.diameter) < parseInt(b.diameter));
           this.setState({planetData: resultData, searchPlanetData: resultData})
          }
        )
     } 
     logoutUser() {
         localStorage.setItem("username", "")
         browserHistory.replace('/searchscreen')
         browserHistory.push('/')
     }


    render() {
        const userName = localStorage.getItem("username")
        return (
          <div>  
          <div class='topnav'>
            <div class="search-container">    
                  <label class="label" for="uname"><b>Welcome, {localStorage.getItem("username")}</b></label> 
                  <a  href="javascript:void(0);" onClick={this.logoutUser} class="logout">Logout</a>
                <input type="text" placeholder="Search here..." ref={input => this.search = input} onChange={this.updateSearch} />
            </div>
           </div>
         <div class="containerList">
           <SearchList searchListData={this.state.planetData} />
         </div>
         </div>
        );
    }
}
