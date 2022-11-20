
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import Loader from '../../Shared/Loader/Loader';

const AllUser = () => {
 

    const url = 'http://localhost:5000/allUsers'

    const {data : allUsers = [], refetch , isLoading} = useQuery ({
        queryKey : ["allUsers"],
        queryFn : async ()=>{
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })
    const handleAdmin = (id)=>{
        console.log(id);
       fetch(`http://localhost:5000/user/admin/${id}`,{
        method : "PUT",
        headers : {
            authorization : `bearer ${localStorage.getItem('AccessToken')}` 
        }
       })
       .then(res => res.json())
       .then(data => {
        console.log(data.massage, data);
        if(data.massage){
            console.log(data.massage)
            toast.error(data.massage)
        }
        if(data.modifiedCount){
            toast.success('Admin create successfully')
            refetch()
        } 
       
        console.log(data)
    }).catch(error=> {

    })
    }

    if(isLoading){
        return <Loader></Loader>
    }

    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
      
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
                allUsers?.map((user, index) =><tr
                key={index}
                >
                    <th>{index+1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td> {
                         !user.role ? <button onClick={()=>handleAdmin(user?._id)} className='btn btn-primary btn-xs'>Make Admin</button> : 

                              <h1 className='bg-green-600 py- px-2 w-24 text-white text-center rounded-sm'>Admin</h1>
                        } </td>
                    <td> <button className='btn btn-accent btn-xs'>Delete</button> </td>
                  </tr>)
            }
          </tbody>
          <Toaster></Toaster>
        </table>
      </div>
    );
};

export default AllUser;