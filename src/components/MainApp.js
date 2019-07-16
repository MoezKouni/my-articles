import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';
import {connect} from 'react-redux'

const firstImage= { url:'https://img4.goodfon.com/wallpaper/nbig/3/55/code-coding-laptop-programming.jpg' }
const secondImage= { url:'http://pavbca.com/walldb/original/0/1/9/110260.jpg' }
const thirdImage= { url:'http://papers.co/wallpaper/papers.co-no02-macbook-bokeh-coding-apple-29-wallpaper.jpg' }


class MainApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyWord: ''
        }
    }  
    
    render() {
        return(
            <div>
            <div className="container">
                <header className="header">
                    <Header value={this.state.keyWord}
                            onChange={(newKeyWord) => {
                                this.setState({ keyWord: newKeyWord })
                    }}/>
                </header>
                <div className="slidshow">
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={firstImage.url}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={secondImage.url}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={thirdImage.url}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>  
                    </Carousel>
                </div>
    
                <div className="aticle-container">
                    <Article articleReducer={this.props.articleReducer.filter(el => el.title.toUpperCase().includes(this.state.keyWord.toUpperCase().trim()))}/>
                </div>
            </div>
                    <Footer/>
            </div>
        )   
    }
}

const mapStateToProps = (state) => {
    return{
        articleReducer: state.ArticleReducer
    }
}

export default connect(mapStateToProps)(MainApp);