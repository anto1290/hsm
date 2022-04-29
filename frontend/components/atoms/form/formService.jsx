import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Select from "react-select"
import { useGetRoomTypes } from '@/apollo/action';
import { useRouter } from 'next/router';
const FormService = ({ onSubmit, initialdata }) => {
    const router = useRouter();
    const [selectedRoomType, setSelectedRoomType] = useState([]);
    const { loading, error, data: getRoomTypes } = useGetRoomTypes();
    const { handleSubmit, setValue, control } = useForm();
    const roomTypes = [];
    const array = (getRoomTypes && getRoomTypes.roomTypes) || [];
    array.map((item) => {
        return roomTypes.push({
            value: item._id,
            label: item.nameType
        })
    });
    useEffect(() => {
        if (initialdata) {
            setValue("id", initialdata.id);
            setValue("name", initialdata.name);
            setValue("price", initialdata.price);
            setValue("roomType", initialdata.roomType);
            setValue("description", initialdata.description);
            setValue("typePrice", initialdata.typePrice);
            setValue("active", initialdata.active);

        }
    }, [initialdata])

    const optionsPriceType = [
        { value: 'Per Night', label: 'Per Night' },
        { value: 'Per Person', label: 'Per Person' },
        { value: 'Fixed Price', label: 'Fixed Price' },
    ];


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller name='id' control={control} render={({ field: { value } }) =>
                <input value={value} type="hidden" />
            } />
            <div className="grid grid-cols-2 gap-6">
                <div className="block ">
                    <label className="text-sm text-gray-600">
                        Name Service
                    </label>
                    <Controller
                        name='name'
                        defaultValue=""
                        control={control}
                        render={({ field }) => <input {...field} type="text" className='mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none' />}
                    />
                </div>
                <div className="block ">
                    <label className="text-sm text-gray-600">
                        Room Type
                    </label>
                    {loading && (<div className="flex justify-center items-center py-10">
                        <div
                            className="spinner-grow inline-block w-10 h-10 bg-current rounded-full opacity-0"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>)}
                    <Controller
                        name='roomType'
                        control={control}
                        render={({ field: { onChange, value, name } }) => (
                            <Select
                                isClearable
                                isMulti
                                value={value ? roomTypes.filter(c => value.includes(c.value)) : []}
                                onChange={(e) => onChange(e.map((c) => c.value))}
                                options={roomTypes}
                            />
                        )}
                    />
                </div>
                <div className="block">
                    <label htmlFor="" className='text-sm text-gray-600'>Price</label>
                    <Controller
                        name='price'
                        control={control}
                        render={({ field }) => <input {...field} type="number" className='mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none' />}
                    />
                </div>
                <div className="block">
                    <label htmlFor="" className='text-sm text-gray-600'>Price Type</label>
                    <Controller
                        name='typePrice'
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Select
                                isClearable
                                value={optionsPriceType.find((e) => e.value === value)}
                                onChange={(e) => onChange(e.value)}
                                options={optionsPriceType}
                            />
                        )}
                    />
                </div>
                <div className="block col-span-2">
                    <label htmlFor="" className='text-sm text-gray-600'>Description</label>
                    <Controller
                        name='description'
                        control={control}
                        render={({ field }) => <textarea className='mt-0 form-textarea  block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none' {...field} cols={10} rows={5} />}
                    />
                </div>
                <div className="block">
                    <label htmlFor="" className='text-sm text-gray-600'>Active Service</label>
                    <div className="block">
                        <Controller
                            name='active'
                            control={control}
                            render={({ field }) => (
                                <><input type="checkbox" className='from-input' checked={field.value} value={field.value} onChange={(e) => field.onChange(e)} /> <span className='text-sm font-bold' >active</span></>)}
                        />
                    </div>
                </div>
                <div className="block col-span-2" >
                    <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={() => router.push("/admin/paidServices")}
                            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            back
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormService