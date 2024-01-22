type UserStore = {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;

  userName: string;
  setUserName: (userName: string) => void;

  passWord: string;
  setPassWord: (passWord: string) => void;
};

export default UserStore;
