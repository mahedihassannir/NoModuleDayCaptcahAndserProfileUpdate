import { useContext } from "react";
import { contexM } from "../Authentication/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
    const { user } = useContext(contexM);

    // first get the user from the contex 


    // here is the refatch method and data:cart
    const { refetch, data: cart = [] } = useQuery({

        queryKey: ['Cart', user?.email],

        queryFn: async () => {

            const res = await fetch(` http://localhost:5000/carts?email=${user?.email}`)
        
            return res.json();
            
        },
    })


    return [cart, refetch] // return the values 

}
export default useCart;