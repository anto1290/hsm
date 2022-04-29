import React, { useEffect, useState } from 'react'
import { LayoutAdmin, FormRegular } from "@/components";
import { useRouter } from 'next/router';
import { useGetPrice, useUpdatePrice } from '@/apollo/action';
const EditRegular = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data: price } = useGetPrice({ variables: { id } });
    const [updatePrice, { loading, error }] = useUpdatePrice();
    const [Price, setPrice] = useState({});

    useEffect(() => {
        if (price) {
            setPrice(price.price);
        }
    }, [price]);
    const handleSubmit = (data) => {
        const input = {
            roomType: data.roomType,
            mon: data.mon,
            tue: data.tue,
            wed: data.wed,
            thu: data.thu,
            fri: data.fri,
            sat: data.sat,
            sun: data.sun,
            priceType: "Regular"
        }
        updatePrice({ variables: { id: data.id, input } })
        if (!loading && !error) {
            router.push("/admin/priceManager");
        }
    }
    return (
        <LayoutAdmin>
            <section className="container mt-12">
                <div className="flex justify-between p-2">
                    <h1 className="text-2xl font-bold block">Edit Price Manager</h1>
                    <h1 className="text-sm font-bold mt-8 pr-2">
                        <span className="text-gray-400">
                            admin {"> "}Price Manager {"> "}
                        </span>
                        Edit Regular
                    </h1>
                </div>

                <div className="w-[80vw] p-5">
                    <FormRegular onSubmit={handleSubmit} initialData={Price} />
                </div>
                {error && <div className="text-red-500">{error.message}</div>}
            </section>
        </LayoutAdmin>
    )
}

export default EditRegular