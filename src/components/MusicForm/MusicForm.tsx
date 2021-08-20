import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface MusicFormProps {
    id?:string;
    data?:{}
}

interface MusicState {
    name: string;
    price: string;
}

export const MusicForm = (props:MusicFormProps) => {

    const dispatch = useDispatch();
    let { musicData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<MusicState>(state => state.name)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            server_calls.create(store.getState())
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="artist">Artist Name</label>
                    <Input {...register('artist')} name="artist" placeholder="Artist"/>
                </div>
                <div>
                    <label htmlFor="album">Album Name</label>
                    <Input {...register('album')} name="album" placeholder="Album"/>
                </div>
                <div>
                    <label htmlFor="tracks">Number of Tracks</label>
                    <Input {...register('tracks')} name="tracks" placeholder="Number of Tracks"/>
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name="year" placeholder="Year"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}