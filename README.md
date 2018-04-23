# Language Interpretation and Recognition Interface (LIRI)

LIRI is a Language Interpretation and Recognition Interface. LIRI will accept a variety of user syntaxes that
will query API databases for Twitter, Spotify, and ODM.

My purpose for coding LIRI was to increase my knowledge and understanding of API calls from NODE.js using
Node Package Modules. 

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Tech Used](#tech-used)
- [Installation](#installation)
- [API Reference](#api-reference)
  - [Endpoint](#endpoint)
- [Testing](#testing)
- [License](#license)
- [Next Steps](#next-steps)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Tech Used

-  Node.js
- Twitter API
- Spotify API
- ODM API
- Twitter for Node.js
- Node-spotify-api


## Installation

Steps:

npm i twitter
npm i node-spotify-api
npm i request
npm i fs

## API Reference
[Twitter](https://developer.twitter.com/en/docs/api-reference-index) 
[Spotify](https://developer.spotify.com/web-api/tutorial/)
[ODM](http://www.omdbapi.com/)


## Testing
There are 4 main syntaxes used:

    Twitter = ' my-tweets '
    Spotify = ' spotify-this-song '
    Movie search = ' movie-this '
    Random return = ' do-what-it-says '

You can run test by:
' node liri.js "Any of the 4 syntaxes" 

## License

MIT License

## Next Steps

Continue LIRI development to increase functionability.

Twitter: Development to allow swithicng of user Tweets.
Spotify: Intake of Artist, Albums, and narrow search return with songs. 
ODM: Increase functionality to take in multiple parameters, as well as searching by Actor/Actress and Genre.