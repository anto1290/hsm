import React, { useEffect, useState } from 'react'
import { LayoutAdmin, FormSpecial } from "@/components";
import { useCreatePrice, } from "@/apollo/action";
const NewSpecial = () => {
    const [createPrice, { loading: priceLoading, error: priceError, data: priceData }] = useCreatePrice();
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
            priceType: "Special",

            title: data.title,
            description: data.description,
            startDate: data.startDate,
            endDate: data.endDate,

        }
        createPrice({ variables: input })
    }
    useEffect(() => {
        if (priceData && priceData.createPrice) {
            router.push("/admin/priceManager");
        }
    }, [priceData])
    return (
        <LayoutAdmin>
            <section className="container mt-12">
                <div className="flex justify-between p-2">
                    <h1 className="text-2xl font-bold block">Create Price Manager</h1>
                    <h1 className="text-sm font-bold mt-8 pr-2">
                        <span className="text-gray-400">
                            admin {"> "}Price Manager {"> "}
                        </span>
                        New Specials
                    </h1>
                </div>

                <div className="w-[80vw] p-5">
                    <FormSpecial onSubmit={handleSubmit} />
                </div>
                {/* {priceError && <div className="text-red-500">{priceError.message}</div>} */}
            </section>
        </LayoutAdmin>
    )
}

export default NewSpecial