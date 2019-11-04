import React from 'react'

import github from '../img/github-icon.svg'
import email from '../img/email-icon.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6 has-text-centered-mobile footer-note ">
              Copyright © 2019 Liviu Iancuta. <br />Powered by <a href="https://gatsbyjs.org" class="has-text-warning">Gatsby</a> &amp; <a
                href="https://netlify.com" class="has-text-warning">Netlify</a>
            </div>
            <div className="column is-6">

              <div className="social has-text-right has-text-centered-mobile">
                <a title="Github" href="https://github.com/iLiviu">
                  <img
                    src={github}
                    alt="Github"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="Email" href="mailto:liviu.iancuta@gmail.com">
                  <img
                    src={email}
                    alt="Email"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
