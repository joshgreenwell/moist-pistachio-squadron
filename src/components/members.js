import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Avatar } from '@material-ui/core'
import { css } from 'emotion'
import fetch from 'node-fetch'

const root = css`
  width: 80%;
  margin: 50px auto 0 auto;
  overflow-x: 'auto';
`

const table = css`
  min-width: 650;
` 

// TODO: Switch to db
const rows = [
  { icon: 'J', name: 'Josh', race: 'Troll', spec: 'Holy', class: 'Priest', role: 'Healer' },
  { icon: 'K', name: 'Khory', race: 'Tauren', spec: 'Restoration', class: 'Druid', role: 'Healer' },
  { icon: 'B', name: 'Bri', race: 'Undead', spec: '', class: 'Warlock', role: 'DPS' },
  { icon: 'B', name: 'Brian', race: 'Orc', spec: 'Protection', class: 'Warrior', role: 'Tank' },
  { icon: 'R', name: 'Raf', race: 'Orc', spec: '', class: 'Hunter', role: 'DPS' },
  { icon: 'J', name: 'James', race: '', spec: '', class: '', role: '' }
];

const getActiveMembers = () => {
  // TODO: Dynamic url
  fetch(`http://localhost:8000/members`)
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp)
    })
  return rows
}

const Members = () => {
  const rows = getActiveMembers()
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
          {(rows || []).map(row => (
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