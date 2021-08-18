import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'artist',
        headerName: 'Artist',
        width: 150,
        editable: true
    },
    {
        field: 'album',
        headerName: 'Album',
        width: 150,
        editable: true
    },
    {
        field: 'tracks',
        headerName: 'Tracks',
        type: 'number',
        width: 150,
        editable: true
    }
];
const rows = [
    { id: 1, artist: 'J Cole', album: 'The Offseason', tracks: 12 },
    { id: 2, artist: 'J Cole', album: '2014 Forest Hills Drive', tracks: 13 },
    { id: 3, artist: 'J Cole', album: 'Cole World: The Sideline Story', tracks: 16 },
    { id: 4, artist: 'Eminem', album: 'The Eminem Show', tracks: 19 },
    { id: 5, artist: 'Eminem', album: 'Recovery', tracks: 17 },
    { id: 6, artist: 'Eminem', album: 'Encore', tracks: 23 },
    { id: 7, artist: 'Eminem', album: 'The Marshall Mathers LP', tracks: 18 },
    { id: 8, artist: 'Kanye West', album: '808s and Heartbreak', tracks: 12 },
    { id: 9, artist: 'Kanye West', album: 'My Beautiful Dark Twisted Fantasy', tracks: 13 },
];

export const DataTable = () => {
    return (
        <div style={{height: 700, width: '100%'}}>
            <h2>Rap albums</h2>
            <DataGrid rows={rows} columns={columns} pageSize={rows.length} checkboxSelection />
        </div>
    )
}