export const API_ENDPOINTS = {
    cards_api:(race) => `${process.env.REACT_APP_API_URL}/api/v7/cardinfo.php?type=Spell%20Card&race=${race}`
}
