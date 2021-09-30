import React, { useContext } from 'react';
import { PageContext } from './PageContextProvider';
const Header = () => {
    const { user } = useContext(PageContext);
    return (
        <div className="header">
        	{user.name}
        </div>
    );
}
export default Header;