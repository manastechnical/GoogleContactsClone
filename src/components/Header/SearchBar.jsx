import { InputBase } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { styled, alpha } from '@mui/material/styles';

export default function SearchBar() {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
        [theme.breakpoints.down('sm')]: {
            backgroundColor: "inherit",
          }
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '600px',
          '&:focus': {
            width: '680px',
          },
          [theme.breakpoints.down('lg')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
          [theme.breakpoints.down('sm')]: {
            width: '0ch',
            '&:focus': {
              width: '2ch',
            },
          }
        },
      }));

    return (
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
    );
}
