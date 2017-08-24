import React, { Component } from 'react';
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
    };
  }

  componentDidMount() {
    this.getCategories();
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

  render() {
    const categories = this.state.categories;

    return (
      <div>
        <Header></Header>
        <div className='app-body'>
          <Sidebar {...this.props}/>
        </div>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>

          <ListGroup>
            { categories.map((category) => (
              <ListGroupItem key={category.name} tag="a" href="#">
                {category.name}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Jumbotron>

      </div>
    );
  }
}

export default App;
