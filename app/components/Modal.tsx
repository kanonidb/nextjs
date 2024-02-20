"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";

function Modal({ isVisible, onClose, children }: { isVisible: any; onClose: any; children: any }) {

    if(!isVisible) return null;
    const handelClose =(e: { target: { id: any; }; }) => {debugger
        if(e.target.id == 'wrapper'){
            onClose();
        } 
    }
    const searchParams = useSearchParams();
    const modal = searchParams.get("modal");
    const pathname = usePathname();

    return (
        // <>
        //     {modal &&
        //         <dialog
        //             className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50
        //              overflow-auto backdrop-blur flex justify-center items-center">
        //             <div className="bg-white m-auto p-8">
        //                 <div className="flex flex-col items-center">
        //                     <p>Modal content</p>
        //                     <br/>
        //                     <Link href={pathname}>
        //                         <button type="button" className="bg-red-500 text-white p-2">Close Modal</button>
        //                     </Link>
        //                 </div>
        //             </div>
        //         </dialog>
        //     }
        // </>
        // <>
        //     {modal &&
                <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm 
        flex justify-center items-center" id='wrapper' onClick={handelClose}>
                    <div className="w-[600px] flex flex-col">
                        <button className="text-white txet-xl
                place-self-end"  onClick={() => onClose()}>X</button>

                        <div className="bg-white p-2 rounded"> {children}</div>
                    </div>
                </div>
        //     }
        // </>
    );
}

export default Modal;