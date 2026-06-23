const AUTH_TOKEN_KEY_NAME = 'six-city-token';

export type Token = string | null;

export const getTokenToLocalStorage = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const saveTokenToLocalStorage = (token: Token) => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token ?? '');
};

export const dropTokenToLocalStorage = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
