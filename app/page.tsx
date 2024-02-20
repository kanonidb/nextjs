"use client";

import { Fragment, useState } from "react";
import Modal from "./components/Modal";

export default function Home() {
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
                console.log("Oops! Something is wrong.")
            }
        } catch (error) {
            console.log(error)
        }
        setTitle('')
        setBody('')
        setUserId('')
    }
  console.log("hello world");
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  return (
    <Fragment>
    <main className="mt-10">
      <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Eligendi, consequatur quas. Sapiente, pariatur ullam reiciendis 
        nostrum unde incidunt sunt, sed tenetur labore esse, 
        blanditiis assumenda in repudiandae debitis cumque quos. 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ea doloremque temporibus delectus labore reprehenderit laboriosam 
        eum, rem voluptatum id excepturi sint, repellendus cupiditate voluptatibus, 
        doloribus corporis amet perspiciatis impedit earum!</div>


        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium
        text-sm rounded-lg px-5 py-2.5 text-center mr-5"
        onClick={()=>setShowModal(true)}>Text Modal</button>

        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium
        text-sm rounded-lg px-5 py-2.5 text-center mr-5"
        onClick={()=>setShowModal2(true)}>Video Modal</button>
        
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium
        text-sm rounded-lg px-5 py-2.5 text-center mr-5"
        onClick={()=>setShowModal3(true)}>Form Modal</button>

       
    </main>
     <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
       <div className="p-6">
       <h3 className="text-xl font-semibold text-grat-900 mb-5">Modal Title</h3>
       </div>
       <p className="p-6 font-normal text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Saepe, quod. Iusto aut voluptatibus, porro ab, ipsam magni placeat voluptate 
        ea asperiores eius eum harum nemo. Minima facilis eaque repudiandae delectus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Saepe, quod. Iusto aut voluptatibus, porro ab, ipsam magni placeat voluptate 
        ea asperiores eius eum harum nemo. Minima facilis eaque repudiandae delectus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Saepe, quod. Iusto aut voluptatibus, porro ab, ipsam magni placeat voluptate 
        ea asperiores eius eum harum nemo. Minima facilis eaque repudiandae delectus.
        </p>
        <p className="p-6 font-normal text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Saepe, quod. Iusto aut voluptatibus, porro ab, ipsam magni placeat voluptate 
        ea asperiores eius eum harum nemo. Minima facilis eaque repudiandae delectus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Saepe, quod. Iusto aut voluptatibus, porro ab, ipsam magni placeat voluptate 
        ea asperiores eius eum harum nemo. Minima facilis eaque repudiandae delectus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Saepe, quod. Iusto aut voluptatibus, porro ab, ipsam magni placeat voluptate 
        ea asperiores eius eum harum nemo. Minima facilis eaque repudiandae delectus.
        </p>
       </Modal>

       <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
       <div className="p-6">
       <h3 className="text-xl font-semibold text-grat-900 mb-5">Modal Title 2</h3>
       </div>
       <p className="p-6 font-normal text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Saepe, quod. Iusto aut voluptatibus, porro ab, ipsam magni placeat voluptate 
        ea asperiores eius eum harum nemo. Minima facilis eaque repudiandae delectus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Saepe, quod. Iusto aut voluptatibus, porro ab, ipsam magni placeat voluptate 
        ea asperiores eius eum harum nemo. Minima facilis eaque repudiandae delectus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Saepe, quod. Iusto aut voluptatibus, porro ab, ipsam magni placeat voluptate 
        ea asperiores eius eum harum nemo. Minima facilis eaque repudiandae delectus.
        </p>
        <p className="p-6 font-normal text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Saepe, quod. Iusto aut voluptatibus, porro ab, ipsam magni placeat voluptate 
        ea asperiores eius eum harum nemo. Minima facilis eaque repudiandae delectus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Saepe, quod. Iusto aut voluptatibus, porro ab, ipsam magni placeat voluptate 
        ea asperiores eius eum harum nemo. Minima facilis eaque repudiandae delectus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Saepe, quod. Iusto aut voluptatibus, porro ab, ipsam magni placeat voluptate 
        ea asperiores eius eum harum nemo. Minima facilis eaque repudiandae delectus.
        </p>
       </Modal>

       <Modal isVisible={showModal3} onClose={() => setShowModal3(false)}>
       <div className="p-6">
       <h3 className="text-xl font-semibold text-grat-900 mb-5">Modal Title 3</h3>
       </div>
       <div className=" flex flex-col justify-center items-center w-full p-8 ">
            <h1 className=" w-full text-center m-4 font-semibold text-lg ">GET & POST Request in NextJS Stable App Router</h1>
            <form onSubmit={handleSubmit} className=" flex w-full flex-col justify-center items-center ">
                <div className=" flex w-1/2 justify-center items-center gap-4 ">
                <input
                        type="number"
                        name="userId"
                        value={userId}
                        placeholder="Enter the userId"
                        onChange={e => setUserId(e.target.value)}
                        className=" border p-2 px-4 rounded outline-none "
                    />
                    <input
                        type="text"
                        name="title"
                        value={title}
                        placeholder="Enter the title"
                        onChange={e => setTitle(e.target.value)}
                        className=" border p-2 px-4 rounded outline-none "
                    />
                     <input
                        type="text"
                        name="body"
                        value={body}
                        placeholder="Enter the body"
                        onChange={e => setBody(e.target.value)}
                        className=" border p-2 px-4 rounded outline-none "
                    />
                    <button
                        type="submit"
                        className=" border-blue-500 bg-blue-500 text-white p-2 px-4 rounded-md "
                    >Submit</button>
                </div>
            </form>
        </div>
       </Modal>
     </Fragment>
  );
}
