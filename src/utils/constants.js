module.exports = {
  NETFLIX_LOGO:
    "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png",
  BACKGROUND_COLLAGE_IMG:
    "https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg",
    USER_ICON:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    TMDB_API_OPTIONS : {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer '+process.env.REACT_APP_TMDB_API
      }
    },
    TMDB_IMG_LINK_W_500:"https://image.tmdb.org/t/p/w500",
    TMDB_IMG_LINK_ORIGINAL:"https://image.tmdb.org/t/p/original"
};


