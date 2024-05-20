import { createContext, useContext } from "react";

const MyContext = createContext();
export function useItems() {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useItems must be used within an ItemsProvider');
    }
    return context;
}
export default MyContext;
