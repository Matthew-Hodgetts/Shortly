import React, { Component } from 'react';
import './linkForm.scss';

class LinkForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const newVal = e.target.value;
    this.setState({
      textInput: newVal,
      errors: [],
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.textInput);

    // Send to api

    this.setState({ textInput: '' });
  }

  render() {
    return (
      <section className='linkForm'>
        <div className='container'>
          <div className='row'>
            <form onSubmit={this.props.submit}></form>
            <div className='col-md-9'>
              <input
                type='text'
                name='link'
                id='link'
                onChange={this.handleChange}
                value={this.state.textInput}
                placeholder='Shorten a link here'
              />
            </div>
            <div className='col-md-3'>
              <button
                className='button'
                type='submit'
                onClick={this.handleSubmit}>
                Shorten it!
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LinkForm;
