import React, {useState} from 'react';
import { DataGrid, GridColDef, GridRowModel, GridValueGetterParams } from '@material-ui/data-grid';
import { server_calls } from '../../api'; 
import { useGetData } from '../../custom-hooks'; 
import { Button,Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core'; 
import { MusicForm } from '../../components/MusicForm';


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
interface gridData{
    id?:string;
}


export const DataTable =  () => {

    let { musicData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({id:''});

    let handleOpen = () => {
        setOpen(true)
    }

    let handleClose = () => {
        setOpen(false)
    }

    let deleteData = () => {
        server_calls.delete(gridData.id!)
        getData()
    }

    let handleCheckbox = (id:GridRowModel) =>{
        if(id[0] === undefined){
            setData({id:''})
        }else{
            setData({id:id[0].toString()})
        }
    
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h2>Music</h2>
            <DataGrid rows={musicData} columns={columns} pageSize={5} checkboxSelection onSelectionModelChange = { handleCheckbox } />

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

            {/*Dialog Pop Up begin */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Music</DialogTitle>
            <DialogContent>
            <DialogContentText>Update Music</DialogContentText>
                <MusicForm id={gridData.id!}/>
            </DialogContent>
            <DialogActions>
            <Button onClick = {handleClose} color="primary">Cancel</Button>
            <Button onClick={handleClose} color = "primary">Done</Button> 
            </DialogActions>
        </Dialog>
        </div>
        );
}