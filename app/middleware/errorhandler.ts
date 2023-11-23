export const errorHandler =  (message:string,statusCode:number,success:boolean)=>{
return Response.json({
    message,
    success
},{
    status:statusCode
})
}