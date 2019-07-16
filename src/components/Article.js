import React, { Component } from 'react'
import {Accordion, Button, Card} from 'react-bootstrap';
import {connect} from 'react-redux'
import EditArticle from './EditArticle';


class Article extends Component {
    render(){
    const {articleReducer} = this.props
    return(
            <div>
                {articleReducer.length !==0 ? articleReducer.map((el, index) => <div className="article" key={el.id}>
                            <h2 className="article-title"> {el.title} </h2>
                            <Accordion defaultActiveKey="1">
                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        Read full article!
                                    </Accordion.Toggle>
                                    <div className="buttons">
                                        <EditArticle id={el.id}/>
                                        <button 
                                            className="delete-button"
                                            onClick={()=>this.props.deleteReducer(index)}
                                        >
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </div>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <img className="img-article" src={el.img} alt="article"/>
                                        <p className="pargraphe-article">
                                            {el.text}
                                        </p>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    
            ) : <h1 className="failed-search"> No Articles Found</h1>}

            </div>
            
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteReducer: id => {
            dispatch({
                type: 'DELETE_ARTICLE',
                id
            })
        }
    }
}


export default connect(null, mapDispatchToProps)(Article);