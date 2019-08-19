import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Avatar } from '@material-ui/core'
import { css } from 'emotion'

const root = css`
  width: 80%;
  margin: 50px auto 0 auto;
  overflow-x: 'auto';
`

const table = css`
  min-width: 650;
` 

const Members = () => {
  const [rows, setRows] = useState([])

  useEffect(() => {
    (async () => {
      // TODO: Make url dynamic
      const resp = await fetch('http://localhost:8000/members', {
        headers: {
          'content-type': 'application/json'
        }
      })
      resp.json().then(members => setRows(members))
    })()
  }, [])

  return (
    <Paper className={root}>
      <Table className={table}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell>Race</TableCell>
            <TableCell>Class & Spec</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component='th'>
                <Avatar>{row.icon}</Avatar>
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.race}</TableCell>
              <TableCell>{`${row.spec} ${row.class}`}</TableCell>
              <TableCell>{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default Members