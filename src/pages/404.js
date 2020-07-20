import React from 'react';

import Layout from '../components/common/layout';

const NotFoundPage = () => (
  <Layout>
    <section id="land" className="wrapper style1 fullscreen fade-up">
      <div className="inner">
        <h1> Not Found </h1>{' '}
        <p> The page you have requested does not exist. </p>{' '}
        <ul class="actions">
          <li>
            <a href="/" class="button large fit">
              Return to home
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
