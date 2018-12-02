import React, { Component } from "react";
import { browserHistory} from 'react-router';
import DetailInfo from './DetailInfo.js';
import './SearchList.css';

export default class SearchList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planetDetail: null
        }
        this.openDetailPage = this.openDetailPage.bind(this)
        this.closeDetail = this.closeDetail.bind(this)
    }
    openDetailPage(e)  {
        let array = this.props.searchListData.filter(parseResult => {
            return (parseResult.name == e.target.textContent) 
		});
        this.setState({planetDetail: array[0]}, () =>
             { if (this.state.planetDetail !=null) {
                 document.getElementById("detailScreen").style.display = "block";
             }
            });
        
    }
    closeDetail() {
        document.getElementById("detailScreen").style.display = "none";
		this.setState({planetDetail: null})
    }
    render() {
        return(
        <div>
             <div class="modal" id="detailScreen">
             {this.state.planetDetail !=null?
              <div class="modal-content">
              <a href="javascript:void(0);" onClick={this.closeDetail}>Close</a>
               <DetailInfo planetDetail={this.state.planetDetail} />
             </div> : null} 
             </div>           
              <ul id="myUL"> {this.props.searchListData.map((parseResult) => 
               {
                return (<li onClick={this.openDetailPage} ><a href="#">{parseResult.name}</a></li>);
                }
              )}
             </ul>
           </div> 
        );
    }
}