module.exports = Object.freeze({
  FluxActions: {
    DEVICES_FETCHED: 'SPOTIFY_DEVICES_FETCHED',
    CURRENT_TRACK_UPDATED: 'SPOTIFY_CURRENT_TRACK_UPDATED',
    PLAYER_STATE_UPDATED: 'SPOTIFY_PLAYER_STATE_UPDATED',
    LIBRARY_STATE_UPDATED: 'SPOTIFY_LIBRARY_STATE_UPDATED',
    SONGS_LOADED: 'SPOTIFY_SONGS_LOADED',
    TOP_SONGS_LOADED: 'SPOTIFY_TOP_SONGS_LOADED',
    ALBUMS_LOADED: 'SPOTIFY_ALBUMS_LOADED',
    ALBUM_TRACKS_LOADED: 'SPOTIFY_ALBUMS_TRACKS_LOADED',
    PLAYLISTS_LOADED: 'SPOTIFY_PLAYLISTS_LOADED',
    PLAYLIST_TRACKS_LOADED: 'SPOTIFY_PLAYLISTS_TRACKS_LOADED',
    PLAYLIST_TRACK_ADDED: 'SPOTIFY_PLAYLIST_TRACK_ADDED',
    PLAYLIST_TRACK_REMOVED: 'SPOTIFY_PLAYLIST_TRACK_REMOVED',
    PURGE_SONGS: 'SPOTIFY_PURGE_SONGS'
  },
  SPOTIFY_BASE_URL: 'https://api.spotify.com/v1',
  SPOTIFY_PLAYER_URL: 'https://api.spotify.com/v1/me/player',
  SPOTIFY_DEFAULT_IMAGE: 'https://www.scdn.co/i/_global/favicon.png',
  SPOTIFY_COLOR: '#1ed860'
});
