
import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ bgcolor: 'grey.800' }}>
                <Toolbar sx={{ 
                        justifyContent: 'center',
                        alignItems: 'center'
                         }}>
                    <Box>
                        <img src="src\assets\denycoin-logo.svg" height={28}/>
                    </Box>
                    <Typography component="div" sx={{ 
                        fontFamily:'Roboto',
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        marginLeft: '0.5rem',
                        color: 'grey.100'
                        }}>
                        Denycoin
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}