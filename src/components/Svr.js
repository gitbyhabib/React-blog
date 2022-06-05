import React from 'react'

export default function Svr() {

function get (lk, rpR) { // get axios //   [lk= link ,rpR= respobse]      
    React.axios.get(lk).then(function(rp) {
        rpR(rp);
    });
}
function post (lk, dt, rpR){ // post axios  //   [lk=limk,dt=[data],resp]      
    React.axios.post(lk, dt).then(function(rp) {
        rpR(rp);
    });
}

function temp (dt){ // this.$mgo.temp().save();      
    this.save=(kpr)=>{ return window.localStorage.setItem("tmp"+dt, kpr); };
    this.get=()=>{ var U = window.localStorage.getItem("tmp"+dt); 
        if(U == null){U = false;}
        return U;
    };
    this.rmv=()=>{ return window.localStorage.removeItem("tmp"+dt); };

    return this;
}
}