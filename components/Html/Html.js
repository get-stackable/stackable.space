import React, { PropTypes } from 'react';
import GoogleAnalytics from '../GoogleAnalytics';
import config from '../../config';

function Html({ title, description, body, debug }) {
  return (
    <html className="no-js" lang="">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>{title || config.title}</title>
        <meta name="description" content={description || config.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.png" />
        <link href='https://fonts.googleapis.com/css?family=Raleway:400,300,500,600' rel='stylesheet' type='text/css' />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.js"></script>
        <script src="typed.min.js"></script>
        <script src="smooth-scroll.min.js"></script>
        <script src="https://use.typekit.net/hwe5hev.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/semantic.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-mfizz/2.3.0/font-mfizz.min.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        <script src={'/app.js?' + new Date().getTime()} />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: body }} />
        <GoogleAnalytics />
      </body>
    </html>
  );
}

Html.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.string.isRequired,
  debug: PropTypes.bool.isRequired,
};

export default Html;
