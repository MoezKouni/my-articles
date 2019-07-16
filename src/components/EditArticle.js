import React, { Component } from 'react'
import {Button, Modal} from 'react-bootstrap'
import {connect} from 'react-redux'


class EditArticle extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          show: false,
        };
    }
      
    handleClose = () => {
        this.setState({ show: false });
    }
    
    handleShow = () => {
        this.setState({ show: true });
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    componentDidMount() {
        this.setState({
            ...this.props.articleReducer.filter(el => el.id === this.props.id)[0]
            
        })
        this.handleClose()
        console.log(this.props)
    }
    edit = () => {
        this.props.editReducer(this.state)
        this.handleClose()
    }
    render() {
        return (
            <div>
                <>
                    <button className="edit-button" onClick={this.handleShow}>
                        <i className="far fa-edit"></i>
                    </button>
            
                    <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="inputs">
                            <input type="text" placeholder="title" value={this.state.title} name="title"  onChange={this.handleChange}/>
                            <input type="text" placeholder="image url" value={this.state.img} name="img" onChange={this.handleChange}/>
                            <textarea type="textarea" placeholder="write your article here!" value={this.state.text} name="text" onChange={this.handleChange}/>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                        Close
                        </Button>
                        <Button variant="success" onClick={this.edit}>
                        Edit!
                        </Button>
                    </Modal.Footer>
                    </Modal>
                </>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        articleReducer: state.ArticleReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        editReducer: editarticle => {
            dispatch({
                type: 'EDIT_ARTICLE',
                editarticle
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);