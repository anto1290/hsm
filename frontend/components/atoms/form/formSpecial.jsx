import React, { useEffect, useState } from 'react'
import { useGetRoomTypes } from '@/apollo/action';
import { useForm, Controller } from 'react-hook-form';
import ReactDatePicker from "react-datepicker";
import { useRouter } from 'next/router'

const FormSpecial = ({ onSubmit, initialData }) => {
    const router = useRouter()

    const { loading, error, data: getRoomTypes } = useGetRoomTypes();
    const RoomTypes = getRoomTypes && getRoomTypes.roomTypes || [];
    const { handleSubmit, register, setValue, control } = useForm();
    useEffect(() => {
        setValue('id', initialData.id)
        setValue('roomType', initialData.roomType, { shouldTouch: true })
        setValue('mon', initialData.mon, { shouldTouch: true })
        setValue('tue', initialData.tue, { shouldTouch: true })
        setValue('wed', initialData.wed, { shouldTouch: true })
        setValue('thu', initialData.thu, { shouldTouch: true })
        setValue('fri', initialData.fri, { shouldTouch: true })
        setValue('sat', initialData.sat, { shouldTouch: true })
        setValue('sun', initialData.sun, { shouldTouch: true })
        setValue('title', initialData.title, { shouldTouch: true })
        setValue('description', initialData.description, { shouldTouch: true })
        setValue('startDate', new Date(initialData.startDate), { shouldTouch: true });
        setValue('endDate', new Date(initialData.endDate), { shouldTouch: true });
    }, [initialData]);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" name="id" {...register("id")} />
                <div className="grid grid-cols-1 gap-4">
                    {loading && <div>Loading...</div>}
                    {error && <div>Error...</div>}
                    <div className="block">
                        <label className="text-gray-700">Room Type</label>
                        <select name="roomType" className="form-select mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none" {...register("roomType")} >
                            {
                                RoomTypes.map((item, index) => (
                                    <option key={index} value={item._id}>{item.nameType + ` - ` + item.codeType}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="block">
                        <label className="text-gray-700">Title Special</label>
                        <input type="text" className="form-input mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none" {...register('title')} />
                    </div>
                    <div className="block">
                        <label className="text-gray-700">Description Special</label>
                        <textarea name="descriotion" className="form-input mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none" {...register('description')} cols="30" rows="5"></textarea>
                    </div>
                    <div className="block">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-gray-700">Start Date Special</label>
                                <Controller
                                    control={control}
                                    name="startDate"
                                    render={({ field }) => (
                                        <ReactDatePicker
                                            selected={field.value}
                                            onChange={e => field.onChange(e)}
                                            dateFormat="dd/MM/yyyy"
                                            className="form-input mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none"
                                        />
                                    )}
                                />
                            </div>
                            <div>
                                <label className="text-gray-700">End Date Special</label>
                                <Controller
                                    control={control}
                                    name="endDate"
                                    render={({ field }) => (
                                        <ReactDatePicker
                                            selected={field.value}
                                            onChange={e => field.onChange(e)}
                                            dateFormat="dd/MM/yyyy"
                                            className="form-input mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none"
                                        />
                                    )}
                                />

                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <span className='font-bold text-2xl' >Price per Day Regular</span>
                        <div className="grid md:grid-cols-7 md:gap-4 min-h-[100px] bg-teal-700 py-2 px-4 rounded-md ">
                            <div>
                                <label className="text-gray-700">Mon</label>
                                <input type="number" name="priceMon" className="form-input block  w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none rounded-md" {...register("mon", {
                                    setValueAs: (v) => parseInt(v),
                                })} defaultValue={0} />
                            </div>
                            <div>
                                <label className="text-gray-700">Tue</label>
                                <input type="number" name="priceMon" className="form-input block  w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none rounded-md" {...register("tue", {
                                    setValueAs: (v) => parseInt(v),
                                })} defaultValue={0} />
                            </div>
                            <div>
                                <label className="text-gray-700">Wed</label>
                                <input type="number" name="priceMon" className="form-input block  w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none rounded-md" {...register("wed", {
                                    setValueAs: (v) => parseInt(v),
                                }
                                )} defaultValue={0} />
                            </div>
                            <div>
                                <label className="text-gray-700">Thu</label>
                                <input type="number" name="priceMon" className="form-input block  w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none rounded-md" {...register("thu", {
                                    setValueAs: (v) => parseInt(v),
                                })} defaultValue={0} />
                            </div>
                            <div>
                                <label className="text-gray-700">Fri</label>
                                <input type="number" name="priceMon" className="form-input block  w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none rounded-md" {...register("fri", {
                                    setValueAs: (v) => parseInt(v),
                                })} defaultValue={0} />
                            </div>
                            <div>
                                <label className="text-gray-700">Sat</label>
                                <input type="number" name="priceMon" className="form-input block  w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none rounded-md" {...register("sat", {
                                    setValueAs: (v) => parseInt(v),
                                })} defaultValue={0} />
                            </div>
                            <div>
                                <label className="text-gray-700">Sun</label>
                                <input type="number" name="priceMon" className="form-input block  w-full border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none rounded-md" {...register("sun", {
                                    setValueAs: (v) => parseInt(v),
                                })} defaultValue={0} />
                            </div>
                        </div>
                    </div>
                    <div className="blok">
                        <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                onClick={() => router.push("/admin/priceManager")}
                                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                            >
                                back
                            </button>
                        </div>
                    </div>
                </div>

            </form>
        </>
    )
}

export default FormSpecial