import * as React from 'react';
import { Button, 
        Table, 
        TableBody, 
        TableCell,
        TableContainer, 
        TableHead, 
        TableRow,
        Typography, 
        Link, 
        Box 
      } from '@mui/material';

export function TableGrid({lista}) {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Sigla</TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Preço</TableCell>
            <TableCell align="center">Variação em 24h</TableCell>
            <TableCell align="center">Capitalização</TableCell>
            <TableCell align="center">Tipo</TableCell>
            <TableCell align="center">Comprar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(lista) ? lista.map((data) => (
            <TableRow key={data.sigla}>
              <TableCell component="th" scope="row">
                <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                  <Box sx={{height: 25, width: 25, marginRight: 1}} component="img" src={data.image} />
                  <Box>{data.sigla}</Box>
                </Box>
              </TableCell>
              <TableCell align="center">{data.nome}</TableCell>
              <TableCell align="center">${data.preco}</TableCell>
              <TableCell align="center">
                <Typography 
                    sx={{
                        fontWeight: '500',
                        color: `${data.variacao.includes('-') ?
                                   'span.negativo': 
                                   'span.positivo'}`
                        }}>
                  {data.variacao}%
                </Typography>
              </TableCell>
              <TableCell align="center">${data.capitalizacao}M</TableCell>
              <TableCell align="center">{data.tipo}</TableCell>
              <TableCell align="center">
                <Link href={data.comprar} underline="none">
                  <Button variant="contained" size="small">
                    Comprar
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          )) :
            <TableRow key={lista.sigla}>
            <TableCell component="th" scope="row">
              <Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Box sx={{height: 25, width: 25, marginRight: 1}} component="img" src={lista.image} />
                <Box>{lista.sigla}</Box>
              </Box>
            </TableCell>
            <TableCell align="center">{lista.nome}</TableCell>
            <TableCell align="center">${lista.preco}</TableCell>
            <TableCell align="center">
              <Typography 
                  sx={{
                      fontWeight: '500',
                      color: `${lista.variacao.includes('-') ?
                                'span.negativo': 
                                'span.positivo'}`
                      }}>
                {lista.variacao}%
              </Typography>
            </TableCell>
            <TableCell align="center">${lista.capitalizacao}M</TableCell>
            <TableCell align="center">{lista.tipo}</TableCell>
            <TableCell align="center">
              <Link href={lista.comprar} underline="none">
                <Button variant="contained" size="small">
                  Comprar
                </Button>
              </Link>
            </TableCell>
          </TableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
