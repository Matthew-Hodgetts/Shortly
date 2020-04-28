import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import LinkForm from './components/linkForm/linkForm';
import DisplayLinks from './components/displayLinks/displayLinks';
import Reasons from './components/reasons/reasons';
import Cta from './components/cta/cta';
import Footer from './components/footer/footer';

import Axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      links: [
        {
          url: 'https://lufc.com',
          hashid: 'https://lds.co.uk',
        },
      ],
    };

    this.shortenLink = this.shortenLink.bind(this);
  }

  shortenLink(url) {
    Axios.post('https://rel.ink/api/links/', {
      url,
    })
      .then((response) => {
        console.log(response.data);
        const links = [...this.state.links];
        console.log(links);
        links.unshift(response.data);
        this.setState({ links });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <section style={{ backgroundColor: '#f0f1f6' }}>
          <LinkForm shortenLink={this.shortenLink} />
          <DisplayLinks links={this.state.links} />
          <Reasons />
        </section>
        <Cta />
        <Footer />
      </div>
    );
  }
}

export default App;
