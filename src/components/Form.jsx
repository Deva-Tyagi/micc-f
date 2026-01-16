"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser'
import { Toaster, toast } from 'sonner'


export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
                publicKey: 'YOUR_PUBLIC_KEY',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const onSubmit = data => {

        const templateParams = {
            to_name: "SIPL",
            from_name: data.Name,
            reply_to: data.Email,
            call_me: data.Mobile,
            message: data.Message,
        }

        sendEmail(templateParams)
    }

    return (

        <>
            
            <Toaster richColors={true} />

        <form onSubmit={handleSubmit(onSubmit)}
            className='max-w-md w-full flex flex-col items-center justify-center space-y-4 sm:max-w-xs md:p-4'
        >
            <input type="text" placeholder="Name" {...register("Name", {
                required: 'This field is required !!',
                minLength: {
                    value: 3,
                    message:'Name should be atleast 3 characters long.'
                }

             })}
                className='w-full p-2 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-primary '
            />
            {
                errors.Name && <span className='inline-block self-start text-primary'>{errors.Name.message}</span>
            }


            <input type="text" placeholder="Email" {...register("Email",
                { required: 'This field is required !!', pattern: /^\S+@\S+$/i })}
                className='w-full p-2 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-primary overflow-hidden'
            />
            {
                errors.Email && <span className='inline-block self-start text-primary'>{errors.Email.message}</span>
            }


            <input type="tel" placeholder="Mobile Number" {...register("Mobile",
                {
                    required: 'This field is required !!',
                    minLength: {
                        value: 6,
                        message: 'Mobile number should be longer than 5 digits'
                    }, maxLength: {
                        value: 12,
                        message:'Mobile number should be less than 13 digits'
                    }
                })}
                className='w-full p-2 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-primary overflow-hidden'
            />
            {
                errors.Mobile && <span className='inline-block self-start text-primary'>{errors.Mobile.message}</span>
            }

            
            <textarea placeholder='Message' {...register("Message",
                {
                    required: 'This field is required !!',
                    maxLength: {
                        value: 500,
                        message: 'Message should be less than 500 characters.'
                    }
                })}
                className='w-full p-2 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-primary overflow-hidden'
            />
            {
                errors.Message && <span className='inline-block self-start text-primary'>{errors.Message.message}</span>
            }


            <input
                type="submit"
                className='flex items-center bg-dark text-light px-6 py-2.5 rounded-lg text-lg font-semibold
                         hover:bg-light hover:text-dark  hover:shadow-primary
                         border-2 border-solid border-transparent hover:border-dark

                         dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:shadow-primaryDark
                          hover:dark:text-light
                         hover:dark:border-light md:p-2 md:px-4 md:text-base md:space-y-4
                '
            />
            </form>
            
        </>

        
    );
}



// import React from 'react';
// import { useForm } from 'react-hook-form';

// export default function App() {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const onSubmit = data => console.log(data);
//     console.log(errors);

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input type="text" placeholder="Name" {...register("Name", { required: true })} />
//             <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
//             <input type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
            // <select {...register("Services  ")}>
            //     <option value="constuction">
            //         constuction
            //     </option>
            //     <option value="constuction">
            //         rebuild
            //     </option>
            // </select>

//             <input type="submit" />
//         </form>
//     );
// }
