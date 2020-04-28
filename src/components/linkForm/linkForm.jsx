import React, { Component } from 'react';
import './linkForm.scss';
class LinkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      errors: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.shortenLink(this.state.url);
  }
  render() {
    return (
      <section className='linkForm'>
        <form onSubmit={this.handleSubmit}>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-10'>
                <input
                  type='text'
                  name='url'
                  id='url'
                  className={this.state.errors.length > 0 ? 'hasError' : null}
                  value={this.state.url}
                  onChange={this.handleChange}
                  placeholder='Shorten a link here'
                />
              </div>
              <div className='col-md-2 text-center text-md-right'>
                <button type='submit' className='button  button--teal'>
                  Shorten
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default LinkForm;
