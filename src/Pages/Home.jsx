import { useContext, useEffect, useState } from "react";
import { contexM } from "../Authentication/AuthProvider";
import useCart from "../Hooks/UseCart";
import Swal from "sweetalert2";





const Home = () => {

    const [, refetch] = useCart()


    const { user } = useContext(contexM)


    const [data, SetData] = useState([])

    useEffect(() => {

        fetch(`http://localhost:5000/items`)
            .then(res => res.json())
            .then(data => SetData(data))
    }, [])

    // here handleing the cart

    const handleCart = (item) => {
        // console.log(item);

        const cartInfos = { email: user.email, name: item.name, price: item.price, image: item.image, category: item.category }
        console.log(cartInfos);

        if (user) {

            fetch(`http://localhost:5000/carts`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(cartInfos)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    refetch()
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'deleted successfully',
                            showConfirmButton: false,
                            timer: 700
                        })
                    }
                })

        }




    }


    // here handleing the cart ends


    return (
        <div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4    ">


                {
                    data.map(res => <div key={res._id}>

                        <div className="card w-96 relative bg-base-100 shadow-xl">
                            {/* here is the price */}
                            <div className="absolute bottom-11/12 right-0 mr-2 mt-3 bg-black text-white px-5">
                                <span> $ {res.price}</span>

                            </div>
                            <figure className="px-10 pt-10">
                                <img src={res.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{res.name}</h2>
                                <p>{res.recipe}</p>
                                <div className="card-actions">
                                    <button onClick={() => handleCart(res)} className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
            {/* here is the  productis  */}






        </div>
    );
};

export default Home;