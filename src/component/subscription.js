import React, { Component } from 'react';

class Subscription extends Component {
        constructor(props){
            super(props);

            this.state={
                email:'',
                error:false,
                success:false
            }
        }


        saveSubscription=(email)=>{

            const URL_EMAIL='http://localhost:3004/subcriptions'

            fetch(URL_EMAIL,{
                method:'POST', 
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json'
                },
                body:JSON.stringify({email})
            }).then(res=>res.json())
            .then(()=>{
                this.setState({
                    email:'',
                    success:true,
                    error:false
                })
            })
        }


        clearMessages=()=>{

            setTimeout(function(){
                this.setState({
                    error:false,
                    success:false
                })
                
            }.bind(this), 3000);
        }

        handleSubmit=(event)=>{
            event.preventDefault();
            let email= this.state.email;
            let regex= /\S+@\S+\.\S+/;

            if(regex.test(email)){
                    this.saveSubscription(email)
            }else{
                    this.setState({error:true})
            }
            this.clearMessages();
        }

    onChangeInput=(event) =>{
        this.setState({
            email:event.target.value
        })
        this.clearMessages()
    }

    render() {
        return (
            <div className="subcribe_panel">
            <h3>Subscribe To Us</h3>
            <div>
                <form onSubmit={this.handleSubmit}> 
                <input type="text"
                placeholder="youremail@email.com"
                value={this.state.email}
                onChange={this.onChangeInput}
                />
            <div className={this.state.error ? "error show"
            :"error"}>Check your email</div>
               
               <div className={this.state.success ? "success show"
               :"success"}>Thank You</div>
               </form>
            </div>
            <small>
             Subscribe to read - NBA
            Gain a global perspective on the US and go beyond with curated news and
             analysis from 600 journalists 
            in 50+ countries covering politics, business, innovation,
            </small>
            </div>
        );
    }
}

export default Subscription;

