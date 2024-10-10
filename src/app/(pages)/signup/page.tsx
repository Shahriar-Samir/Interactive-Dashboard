import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Signup:React.FC = () => {
    return (
        <main className='w-full h-[100vh] flex justify-center items-center font-mukta'>
            <section className='flex items-center flex-col gap-5'>
                <h1 className='text-3xl text-center font-semibold'>Signup</h1>
                <form className='flex gap-5 flex-col'>
                <TextField id="email" label="Email" variant="outlined" />
                <TextField id="password" label="Password" variant="outlined" />
                <Button variant="contained" className='font-semibold bg-yellow-600'>Signup</Button>
                </form>
               <div className='flex gap-5 justify-between flex-col items-center w-full'>
               <Button variant="contained" className='font-semibold bg-black gap-3 w-full'><FcGoogle />Signup With Google</Button>
               <Button variant="contained" className='font-semibold bg-black gap-3 w-full'><FaGithub /> Signup With Github</Button>
               </div>
            </section>
        </main>
    );
};

export default Signup;