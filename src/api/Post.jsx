
export const createFunc=async(blog)=>{
    const response =await fetch('https://simple-blog-server-two.vercel.app',{
        method:"POST",
        headers:{
            "content-Type":"application/json"

        },
        body:JSON.stringify(blog)
    });
    return response.json()
}