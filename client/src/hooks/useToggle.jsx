import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export function useToggle() {
      const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      
    
    const toggleDropdown = () => {
        if (!isLoggedIn) {
          Navigate("/login");
        } else {
          setIsDropdownOpen(true);
        }
      };
    
      const closeDropdown = () => {
        setIsDropdownOpen(false);
      };
      
    return {
        toggleDropdown,
        closeDropdown
    };
}

