export type UserInfo = {
  name: string;
  email: string;
};

export interface User {
  info?: UserInfo;
  setInfo: (arg: UserInfo) => void;
}
