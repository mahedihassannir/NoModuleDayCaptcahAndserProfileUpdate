import useCart from "../Hooks/UseCart";

const CartPage = () => {

    const [cart, refetch] = useCart()

    const handleDElete = (id) => {

        fetch(`http://localhost:5000/carts/${id}`, {
            method: "DELETE",


        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount) {
                    alert("delete successfull")
                    refetch()
                }

                console.log(data);
            })

    }

    return (
        <>

            <div>
                {
                    cart.map(res => <div key={res._id}>

                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">

                                <tbody>
                                    {/* row 1 */}
                                    <tr>

                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={res.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{res.name}</div>
                                                    <div className="text-sm opacity-50">United States</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {res.category}

                                        </td>
                                        <td>$ {res.price}</td>
                                        <th>
                                            <button onClick={() => handleDElete(res._id)} className="btn btn-ghost btn-xs">X</button>
                                        </th>
                                    </tr>

                                </tbody>

                                {/* foot */}

                            </table>
                        </div>

                    </div>)
                }
            </div>

        </>
    );
};

export default CartPage;