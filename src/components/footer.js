import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid bg-secondary text-center  fixed-bottom text-white">
                <div className="py-3 ">
                    <p className="mb-0">Copyright by hrhabib.info {(new Date().getFullYear())}</p>
                </div>
            </div>
         );
    }
}
 
export default Footer;