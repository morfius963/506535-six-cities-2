export interface Props {
  onUserDataPost: (
      userData: {email: string, password: string},
      pushPath: () => void
  ) => void,

  history: {
    push: (path: string) => void
  }
  isAuthorizationRequired: boolean,
  city: string
}

export interface State {
  email?: string,
  password?: string
}