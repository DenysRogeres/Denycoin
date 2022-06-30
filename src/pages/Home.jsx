import React,  { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { TableGrid } from '../components/TableGrid';
import { Grid, TextField, Container, Button, Typography  } from '@mui/material';
import * as httpClienteService from '../services/httpclientService';


export function Home() {
    let [listaCoin, setListaCoin] = useState([]);

    const pesquisarCriptos = async () => {
        await httpClienteService.obterCriptos().then((data) => {
            setListaCoin(data);
        });
    }
    
    return (
        <>
            <Header />
          
            <Container maxWidth="lg" 
                sx={{ 
                    marginTop: 12,
                    bgcolor: 'grey.800',
                    borderRadius: 2,
                    padding: 3
                }}>
                <Grid container spacing={2}>
                    <Grid item lg={2}>
                        <TextField  fullWidth label="Sigla" variant="outlined"/>
                    </Grid>
                    <Grid item lg={3}>
                        <TextField fullWidth label="Criptomoeda" variant="outlined"/>
                    </Grid>
                    <Grid item lg={2}>
                        <TextField disabled fullWidth label="Tipo" variant="outlined"/>
                    </Grid>
                    <Grid item lg={3}>
                        <TextField disabled fullWidth label="Exchange" variant="outlined"/>
                    </Grid>
                    <Grid item lg={2}>
                        <Button onClick={pesquisarCriptos}
                            sx={{ height: "100%"}} 
                            size="large" 
                            fullWidth 
                            variant="contained"
                        >
                            <Typography sx={{ 
                                fontFamily:'Roboto',
                                fontSize: '1rem',
                                fontWeight: '700'}}>
                            Pesquisar
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Container >
        
            <Container maxWidth="lg" 
                sx={{ 
                    marginTop: 3,
                    bgcolor: 'grey.800',
                    borderRadius: 2,
                    padding: 2,
                }}>
                <TableGrid lista={listaCoin}/>
            </Container>
        </>
    )
}