import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Login:React.FC = () => {
    return (
        <main className='w-full h-[100vh] flex justify-center items-center font-mukta'>
            <section className='flex items-center flex-col gap-10'>
                <h1 className='text-3xl text-center '>Login</h1>
                <form className='flex gap-5 flex-col'>
                <TextField id="email" label="Email" variant="outlined" />
                <TextField id="password" label="Password" variant="outlined" />
                <Button variant="contained" className='font-semibold bg-yellow-600'>Login</Button>
                </form>
            </section>
        </main>
    );
};

export default Login;