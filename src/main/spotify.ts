// import SpotifyToYTMusic from './spotify-to-ytmusic';
// import fetch from 'isomorphic-unfetch';
// import SpotifyUrlInfo from 'spotify-url-info';

// const spotify = SpotifyUrlInfo(fetch);

// const sptyt = SpotifyToYTMusic({
//   clientID: process.env.SPOTIFY_CLIENT_ID,
//   clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
// });

console.log(process.env.SPOTIFY_CLIENT_ID);
console.log(process.env.SPOTIFY_CLIENT_ID);

export type CheckUrlResponse = {
  url: string;
  valid: boolean;
  error?: string;
};

export async function checkUrl(url: string): Promise<CheckUrlResponse> {
  if (
    url.match(
      /^https?:\/\/(?:www\.)?open\.spotify\.com\/(album|track|playlist)\/(?:[-a-zA-Z0-9]*)(?:\?si=[-a-zA-Z0-9]*)?$/
    )
  )
    return {
      url,
      valid: true,
    };
  return {
    url,
    valid: false,
    error: 'url does not match the regex',
  };
}

export function spotifySearch(query: string) {
  return;
}
