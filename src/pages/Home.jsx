import React,  { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { TableGrid } from '../components/TableGrid';
import { Grid, TextField, Container, Button, Typography, MenuItem  } from '@mui/material';
import * as httpClienteService from '../services/httpclientService';


export function Home() {
    let [listaCoin, setListaCoin] = useState([]);
    let [selectValue, setSelectValue] = useState('');  

    const criptoLista = [
        {id: '', name: 'Sigla'},
        {id: 1, name: 'BTC'},
        {id: 2, name: 'ETH'},
        {id: 3, name: 'USDT'},
        {id: 4, name: 'BNB'},
    ];

    const pesquisarCriptos = async () => {
        if(selectValue != undefined) {
            await httpClienteService.obterCripto(selectValue).then((data) => {
                setListaCoin(data);
            });
        } 
        else {
            await httpClienteService.obterListaCriptos().then((data) => {
                setListaCoin(data);
            });
        }
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
                        <TextField  
                            fullWidth label="Sigla" 
                            variant="outlined" 
                            select 
                            value={selectValue} 
                            onChange={e => setSelectValue(e.target.value)}
                        >
                                {criptoLista.map((item, index) => (
                                    <MenuItem value={item.id} key={index}>{item.name}</MenuItem>
                                ))}    
                        </TextField>
                    </Grid>
                    <Grid item lg={3}>
                        <TextField disabled fullWidth label="Criptomoeda" variant="outlined" select />
                    </Grid>
                    <Grid item lg={2}>
                        <TextField disabled fullWidth label="Tipo" variant="outlined"/>
                    </Grid>
                    <Grid item lg={3}>
                        <TextField disabled fullWidth label="Exchange" variant="outlined"/>
                    </Grid>
                    <Grid item lg={2}>
                        <Button onClick={pesquisarCriptos}
                            type="submit"
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