let token = `71f0e3278a7e37925bbd3b3cd1ca837b4ac071d559a7aa4b`

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://drone-inventory-ncr.herokuapp.com/api/drones`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server!')
        }

        return await response.json()

    },
    create: async (data:any = {}) => {
        const response = await fetch(`https://drone-inventory-ncr.herokuapp.com/api/drones`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body:JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create a Drone in the Database!')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) =>{
        const response = await fetch(`https://drone-inventory-ncr.herokuapp.com/api/drones/${id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body:JSON.stringify(data)
        });
    },
    delete: async(id:string) =>{
        const response = await fetch(`https://drone-inventory-ncr.herokuapp.com/api/drones/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });
        if (!response.ok){
            throw new Error('Something went wrong here...')
        }
    }
}