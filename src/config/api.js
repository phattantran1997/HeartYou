// Development
// const API_URL = 'http://192.168.1.126:3000/api';

// Production
const API_URL = 'http://heartyouapi.herokuapp.com/api';

export const REGISTER_URL = `${API_URL}/auth/register`;
export const CHECK_USERNAME_URL = `${API_URL}/auth/check-username`;
export const LOGIN_URL = `${API_URL}/auth/login`;
export const MY_USER_INFO_URL = `${API_URL}/auth/me`;

export const SEARCH_USER_URL = `${API_URL}/users/search`;
export const ASK_QUESTION_URL = `${API_URL}/questions`;

export const UPLOAD_AUDIO_URL = `${API_URL}/upload/audio`;

export const getUserInfoUrl = userId => `${API_URL}/users/${userId}`;

export const getNewsFeedUrl = (userId, pageNumber, pageSize) => (
  `${API_URL}/users/${userId}/news-feed?pageNumber=${pageNumber}&pageSize=${pageSize}`
);

export const getUnansweredQuestionsUrl = (userId, pageNumber, pageSize) => (
  `${API_URL}/users/${userId}/unanswered-questions?pageNumber=${pageNumber}&pageSize=${pageSize}`
);

export const getAnsweredQuestionsUrl = (userId, pageNumber, pageSize) => (
  `${API_URL}/users/${userId}/answered-questions?pageNumber=${pageNumber}&pageSize=${pageSize}`
);

export const getAnswerQuestionsUrl = questionId => (
  `${API_URL}/questions/${questionId}/answer`
);

export const getHeartOrUnheartQuestionUrl = questionId => (
  `${API_URL}/questions/${questionId}/heart/`
);

export const getFollowingListUrl = (userId, pageNumber, pageSize) => (
  `${API_URL}/users/${userId}/following?pageNumber=${pageNumber}&pageSize=${pageSize}`
);

export const getFollowerListUrl = (userId, pageNumber, pageSize) => (
  `${API_URL}/users/${userId}/followers?pageNumber=${pageNumber}&pageSize=${pageSize}`
);

export const getFollowOrUnfollowUrl = userId => (
  `${API_URL}/users/${userId}/follow/`
);
