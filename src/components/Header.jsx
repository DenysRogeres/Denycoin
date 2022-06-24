
import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

export function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ bgcolor: '#202024' }}>
                <Toolbar sx={{ 
                        justifyContent: 'center',
                        alignItems: 'center'
                         }}>
                    <Box>
                        <img src="src\assets\denycoin-logo.svg" height={27}/>
                    </Box>
                    <Typography compnent="div" sx={{ 
                        fontFamily:'Roboto',
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        marginLeft: '0.5rem',
                        color: '#E1E1E6'
                        }}>
                        Denycoin
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}