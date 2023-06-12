import SpotifyToYTMusic from './spotify-to-ytmusic';
import fetch from "isomorphic-unfetch"
import SpotifyUrlInfo from "spotify-url-info";
const spotify = SpotifyUrlInfo(fetch)

const sptyt = SpotifyToYTMusic({
  clientID: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

console.log(process.env.SPOTIFY_CLIENT_ID)

export type CheckUrlResponse = {
  url: string;
  valid: boolean;
  error?: string;
};

export async function checkUrl(url: string): Promise<CheckUrlResponse> {
  if ()
    return {
      url,
      valid: false,
      error: 'invalid url',
    };
  return {};
}

export function spotifySearch(query: string) {
  return;
}
