export const MONSTER_CARDS_API_ENDPOINT = {
    cards_api:(type) => `${process.env.REACT_APP_API_URL}/api/v7/cardinfo.php?type=${type}`
}
