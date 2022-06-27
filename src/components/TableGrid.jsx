import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';

function createData(sigla, nome, preco, variacao, capitalizacao, tipo, comprar) {
  return { sigla, nome, preco, variacao, capitalizacao, tipo, comprar };
}

const rows = [
  createData('BTC', 'Bitcoin', 159, 6.0, 24, 'Small', 'comprar'),
  createData('BTC', 'Bitcoin', 159, 6.0, 24, 'Small', 'comprar'),
  createData('BTC', 'Bitcoin', 159, 6.0, 24, 'Small', 'comprar'),
  createData('BTC', 'Bitcoin', 159, 6.0, 24, 'Small', 'comprar'),
  createData('BTC', 'Bitcoin', 159, 6.0, 24, 'Small', 'comprar'),
];

export function TableGrid() {
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
          {rows.map((row) => (
            <TableRow key={row.sigla}>
              <TableCell component="th" scope="row">
                {row.sigla}
              </TableCell>
              <TableCell align="center">{row.nome}</TableCell>
              <TableCell align="center">{row.preco}</TableCell>
              <TableCell align="center">{row.variacao}</TableCell>
              <TableCell align="center">{row.capitalizacao}</TableCell>
              <TableCell align="center">{row.tipo}</TableCell>
              <TableCell align="center">
                <Button variant="contained" size="small">Comprar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
