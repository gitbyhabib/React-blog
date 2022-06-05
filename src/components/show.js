import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

class Show extends Component {
    constructor() {
        super();
        this.state = { post:'', }

        this.DeletePost = this.DeletePost.bind(this);

    }
    render() { 
        let PostData = this.state.post;
        return ( 
            <div>
                <div className="container my-5">
                    <div className="col w-100">
                        <div className="card">
                            <div className="card-header">
                            <img class="img-thumbnail rounded-circle" src='../favicon.ico' alt='user img'></img> By AJay Marathe on {PostData.created_at}
                            </div>
                            <div className="card-body">
                                <h1>{PostData.title}</h1>
                                <div>{ReactHtmlParser(PostData.body)}</div>
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-sm btn-warning"  id="dropdownMenuButton" data-toggle="dropdown">Menu</button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <Link to={`/edit/${PostData.slug}`} className="dropdown-item">
                                            Edit
                                        </Link> 
                                        <button className="dropdown-item" onClick={this.DeletePost}>Delete</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div class="col">
                                        <i class="fa fa-thumbs-up btn  p-1" aria-hidden="true">100&nbsp;</i>
                                        <i class="fa fa-thumbs-down btn float-right  p-1" aria-hidden="true">100</i>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="Leave comment"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }

    componentDidMount(){
        this.Post();
    }

    Post(){
        let slug = this.props.match.params.id;
         console.log(slug,'working asap');
        
        axios.get('http://127.0.0.1:8000/api/posts/'+slug)
        .then(res => {
            this.setState({
                post: res.data,
            });
            console.log(res);
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    DeletePost(){
        const slug = this.props.match.params.id;
        axios.delete('http://127.0.0.1:8000/api/posts/'+slug)
        .then(res =>{
            console.log(res);
        })
        .catch((error) => {
            this.props.history.push('/');
            console.log(error);
        })
        
    }
}
 
export default Show;