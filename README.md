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

npm i twitter ||
npm i node-spotify-api ||
npm i request ||
npm i fs ||

## API Reference
[Twitter](https://developer.twitter.com/en/docs/api-reference-index) 
[Spotify](https://developer.spotify.com/web-api/tutorial/)
[ODM](http://www.omdbapi.com/)


## How to use:
There are 4 main syntaxes used:

    Twitter = 'node liri.js my-tweets '
    Spotify = 'node liri.js spotify-this-song [song name]'
    Movie search = 'node liri.js movie-this [movie title] '
    Random return = 'node liri.js do-what-it-says '

## License

MIT License

## Next Steps

Continue LIRI development to increase functionability.

Twitter: Development to allow swithicng of user Tweets.
Spotify: Intake of Artist, Albums, and narrow search return with songs. 
ODM: Increase functionality to take in multiple parameters, as well as searching by Actor/Actress and Genre.

Also, I'd like to write have this program write to a log based on previous user searches. 