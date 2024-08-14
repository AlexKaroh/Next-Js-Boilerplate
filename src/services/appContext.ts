import { type Dispatch, type SetStateAction, createContext } from "react";

type TAppContext = {
	token: string;
	setToken: Dispatch<SetStateAction<string>>;
};

export const initContext: TAppContext = {
	token: "",
	setToken: () => null,
};

const AppContext = createContext<TAppContext>(initContext);

export default AppContext;
