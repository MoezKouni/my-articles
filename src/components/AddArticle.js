import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap'
import {connect} from 'react-redux'

class AddArticle extends Component {
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
        add = () => {
          this.props.addReducer({...this.state, id:Math.random()*100+''})
          this.handleClose()
      }

      render() {
        return (
          <>
            <Button variant="success" onClick={this.handleShow}>
              Add Article
            </Button>
    
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div className="inputs">
                    <input type="text" placeholder="title" name="title"  onChange={this.handleChange}/>
                    <input type="text" placeholder="image url" name="img" onChange={this.handleChange}/>
                    <textarea type="textarea" placeholder="write your article here!" name="text" onChange={this.handleChange}/>
                  </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="success" onClick={this.add}>
                  Add!
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
    }

const mapDispatchToProps = (dispatch) => {
  return {
      addReducer: newarticle => {
          dispatch({
              type: 'ADD_ARTICLE',
              newarticle
          })
      }
  }
}
   
  export default connect(null, mapDispatchToProps)(AddArticle);