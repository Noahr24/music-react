import React, { useState, useEffect } from 'react';
import { server_calls } from '../api';

export const useGetData = () => {
    const [musicData, setData] = useState<any>([]);

    const handleDataFetch = async () => {
        const result = await server_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return {musicData, getData:handleDataFetch}
}