"use client"

import React, { useState } from 'react'

export default function SaveData() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [userId, setUserId] = useState('')

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const submitData = { title, body, userId }

        try {
            const res: any = fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(submitData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then((response) => response.json())
            console.log(res)
            if (res.ok) {
                console.log("Yeai!")
            } else {
                console.log("Oops! Something is wrong. Try again")
            }
        } catch (error) {
            console.log(error)
        }
        setTitle('')
        setBody('')
        setUserId('')
    }
    return (
        <div className=" flex flex-col justify-center items-center w-full p-8 ">
            <h1 className=" w-full text-center m-4 font-semibold text-lg ">GET & POST Request in NextJS Stable App Router</h1>
            <form onSubmit={handleSubmit} className=" flex w-full flex-col justify-center items-center ">
                <div className=" flex w-1/2 justify-center items-center gap-4 ">
                    <div>
                        <input
                            type="number"
                            name="userId"
                            value={userId}
                            placeholder="Enter the userId"
                            onChange={e => setUserId(e.target.value)}
                            className=" border p-2 px-4 rounded outline-none "
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            placeholder="Enter the title"
                            onChange={e => setTitle(e.target.value)}
                            className=" border p-2 px-4 rounded outline-none "
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="body"
                            value={body}
                            placeholder="Enter the body"
                            onChange={e => setBody(e.target.value)}
                            className=" border p-2 px-4 rounded outline-none "
                        />
                    </div>
                    <button
                        type="submit"
                        className=" border-blue-500 bg-blue-500 text-white p-2 px-4 rounded-md "
                    >Submit</button>
                </div>
            </form>
        </div>
    )
}
