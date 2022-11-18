export const MONSTER_CARDS_API_ENDPOINT = {
  cards_api: (type) =>
    `${process.env.REACT_APP_API_URL}/api/v7/cardinfo.php?type=${type}`,
};

export const SPELL_CARDS_API_ENDPOINT = {
  cards_api: (race) =>
    `${process.env.REACT_APP_API_URL}/api/v7/cardinfo.php?type=Spell%20Card&race=${race}`,
};

export const TRAP_CARDS_API_ENDPOINT = {
  cards_api: (race) =>
    `${process.env.REACT_APP_API_URL}/api/v7/cardinfo.php?type=Trap%20Card&race=${race}`,
};

export const SEARCH_CARDS_API_ENDPOINT = {
  cards_api: (name) =>
    `${process.env.REACT_APP_API_URL}/api/v7/cardinfo.php?name=${name}`,
};
