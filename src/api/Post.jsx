
export const createFunc=async(blog)=>{
    const response =await fetch('http://localhost:5000/blog',{
        method:"POST",
        headers:{
            "content-Type":"application/json"

        },
        body:JSON.stringify(blog)
    });
    return response.json()
}