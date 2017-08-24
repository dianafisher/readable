import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';
import {
  Jumbotron,
  Button,
  ListGroup,
  ListGroupItem
} from 'reactstrap';

import Header from './Header';
import Sidebar from './Sidebar';
import * as api from '../utils/api';

class App extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      categories: [],
      posts: [],
    };
  }

  componentDidMount() {
    this.getCategories();
    this.getPosts();
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getCategories = () => {
    api.fetchCategories().then((response) => {
      console.log(response.categories);

      if (response.categories) {
        console.log('setting state');
        this.setState(() => ({
          categories: response.categories
        }))
      }
    })
  }

  getPosts = () => {
    api.fetchPosts().then((response) => {
      console.log(response.posts);

      if (response.posts) {
        console.log('setting state');
        this.setState(() => ({
          posts: response.posts
        }))
      }
    })
  }

  createPost = () => {

  }

  render() {
    const categories = this.state.categories;
    const posts = this.state.posts;

    return (
      <div>
        <Header></Header>
        <div className='app-body'>
          <Sidebar {...this.props}/>
        </div>
        <Jumbotron>
          <h1 className="display-3">Readable</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
          <h3>Categories</h3>

          <ListGroup>
            { categories.map((category) => (
              <ListGroupItem key={category.name} tag="a" href="#">
                {category.name}
              </ListGroupItem>
            ))}
          </ListGroup>

          <p className="lead">
            <Button color="primary" onClick={() => addPost()}>Add Post</Button>
          </p>

        </Jumbotron>

      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addPost: (data) => dispatch(addPost(data))
  }
}

function mapStateToProps ({ categories, posts }) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
