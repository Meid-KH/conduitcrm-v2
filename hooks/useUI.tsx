import React, { FC } from "react";
interface IuiContext {
	bodyLocked: boolean;
	lockBody: () => void;
	unLockBody: () => void;
}
export const UIcontext = React.createContext<IuiContext>({
	bodyLocked: false,
	lockBody: () => {},
	unLockBody: () => {},
});

export const useUIContext = () => React.useContext(UIcontext);

export const UIContextProvider: FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [bodyLocked, setMegaMenuOpen] = React.useState(false);

	const lockBody = () => setMegaMenuOpen(true);
	const unLockBody = () => setMegaMenuOpen(false);

	return (
		<UIcontext.Provider value={{ bodyLocked, lockBody, unLockBody }}>
			{children}
		</UIcontext.Provider>
	);
};
