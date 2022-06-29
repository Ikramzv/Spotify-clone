export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    token: null,
    playlistID: null,
    recentlyPlayed: null
}

const reducer = (state , action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
        }
        case 'SET_TOKEN': 
            return {
                ...state ,
                token: action.token
            }
        case 'SET_PLAYLISTS': 
            return {
                ...state ,
                playlists: action.payload
            }
        case 'SET_DISCOVER_WEEKLY': 
            return {
                ...state ,
                discover_weekly: action.discover_weekly
            }
        case 'SET_PLAYLIST_ID': 
            return {
                ...state,
                playlistID: action.playlistId
            }
        case 'SET_RECENTLY_PLAYED_TRACKS':
            return {
                ...state ,
                recentlyPlayed: action.tracks
            }
        default:
            return state
    }
}

export default reducer