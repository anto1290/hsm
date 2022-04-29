import React, { useEffect } from 'react'
import { useForm, Controller } from "react-hook-form";
const FormDepartement = ({ onSubmit, initialdata = {}, closeModal }) => {
    const { control, handleSubmit, setValue } = useForm();
    useEffect(() => {
        if (initialdata) {
            setValue("nameDepartement", initialdata.nameDepartement);
            setValue("codeDepartement", initialdata.codeDepartement);
            setValue("id", initialdata._id);
            setValue("active", initialdata.active);
        }
    }, [initialdata]);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-6">
                <Controller
                    name='id'
                    control={control}
                    defaultValue={initialdata.id}
                    render={({ field }) => <input type="hidden" {...field} />}
                />
                <div className="block">
                    <label htmlFor="" className='text-base'>Name Departement</label>
                    <Controller
                        name='nameDepartement'
                        control={control}
                        defaultValue={initialdata.nameDepartement}
                        render={({ field }) => <input type="text" className="mt-0 form-input block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none" {...field} placeholder="House Keeping" />}
                    />
                </div>
                <div className="block">
                    <label htmlFor="" className='text-base'>Code Departement</label>
                    <Controller
                        name='codeDepartement'
                        control={control}
                        defaultValue={initialdata.codeDepartement}
                        render={({ field }) => <input type="text" className="mt-0 form-input block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none" {...field} maxLength={5} minLength={1} placeholder="House Keeping" />}
                    />
                </div>
                <div className="block">
                    <label htmlFor="active" className='text-sm text-gray-600'>Active Departement</label>
                    <div className="block">
                        <Controller
                            name='active'
                            control={control}
                            render={({ field }) => (
                                <><input type="checkbox" className='from-input' checked={field.value} value={field.value} onChange={(e) => field.onChange(e)} /> <span className='text-sm font-bold' >active</span></>)}
                        />
                    </div>

                </div>
                <div className="block" >
                    <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={closeModal}
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

export default FormDepartement