import React from 'react'

class SayHello extends React.Component{
    render(props){
        return(
            <div>
                <h1>Hello and welcome onboard {this.props.name}</h1>
            </div>
        )
    }
}
export default SayHello;