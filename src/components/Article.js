import React ,{PureComponent}from "react"
class Article extends  PureComponent{
    constructor(props){
        super(props)
        this.state ={
            isOpen: props.defaultOpen,
            count: 0
        }
        //this.handleClick  = handleClick.bind(this)
    }
    // state = {
    //     isOpen: true
    // }
    componentWillMount() {
    }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return this.state.isOpen !== nextState.isOpen
    // }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     if (nextProps.defaultOpen != this.props.defaultOpen){
    //         this.setState({
    //             isOpen: nextProps.defaultOpen
    //         })
    //     }
    // }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("----",'update')
    }

    render(){
        const {article, isOpen, onButtonClick} = this.props
        const body = isOpen && <section className="card-text">{article.text}</section>
        return (
            <div className="card mx-auto" style={{width:'50%'}}>
                <div className="card-header">
                <h2 onClick= {this.incrementCounter}>
                    {article.title}
                    cliked {this.state.count}
                    <button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
                        {isOpen ? "close":"open"}
                    </button></h2>
                </div>
                <div className="card-body">

                    <h6 className="card-subtitle text-muted">
                        Creation date: {(new Date(article.date)).toDateString()}</h6>
                    {body}
                </div>
            </div>
        )
    }
    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

}
// function handleClick(){
//
// }

export default Article
