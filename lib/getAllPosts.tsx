export async function getAllPosts(){
    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(response => response.json());
    return result;
}

export async function getComments(id : any){
    const result = await fetch('https://jsonplaceholder.typicode.com//posts/'+id)
    .then(response => response.json());
    return result;
}

export async function savedata(data: any){

    const handleSubmit = async (e: { preventDefault: () => void }) => {

        try {
            const res: any = fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(data),
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
    }
}