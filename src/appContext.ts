import { createContext, Dispatch, SetStateAction } from 'react';
import { TThemeModes } from 'hooks/useThemeColor/useThemeColor';

type TAppContext = {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  themeColor: TThemeModes;
  setThemeColor: Dispatch<SetStateAction<TThemeModes>>;
};

export const initContext: TAppContext = {
  token: '',
  setToken: () => null,
  themeColor: TThemeModes.Light,
  setThemeColor: () => null
};

const AppContext = createContext<TAppContext>(initContext);

export default AppContext;
