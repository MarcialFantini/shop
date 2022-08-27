export const fetchData = (callBack:Function,dispatch:Function)=>{
    fetch("https://fakestoreapi.com/products?limit=4")
    .then(res=>res.json())
    .then(data=>{
        dispatch(callBack(data))
        
        return data
    })
    .catch(err=>console.log(err))
}