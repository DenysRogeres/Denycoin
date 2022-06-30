import * as React from 'react';
import { Button, 
        Table, 
        TableBody, 
        TableCell,
        TableContainer, 
        TableHead, 
        TableRow, 
        Link 
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
          {lista.map((data) => (
            <TableRow key={data.sigla}>
              <TableCell component="th" scope="row">
                {data.sigla}
              </TableCell>
              <TableCell align="center">{data.nome}</TableCell>
              <TableCell align="center">${data.preco}</TableCell>
              <TableCell align="center">{data.variacao}%</TableCell>
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
