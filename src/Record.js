import React from 'react'

class Record extends React.Component{
    constructor(props){
    super(props)
    this.state={
        count : 0
    }
    this.handeClick = this.handeClick.bind(this)
    }
    handeClick(){
        this.setState(prevState =>{
            return{
                count:prevState.count + 1
            }
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handeClick}>Change</button>
            </div>
        )
    }
}

export default Record;