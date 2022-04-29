import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useGetDepartements, useGetDesignations } from '@/apollo/action';
import Select from "react-select"
const FormEmploye = ({ onSubmit, initialdata = {} }) => {
    const { control, setValue, handleSubmit, resetField } = useForm();
    const { loading: departementLoading, error: departementError, data: departementsdata } = useGetDepartements();
    const { loading: designationLoading, error: designationError, data: designationsData } = useGetDesignations();
    const Departements = departementsdata ? departementsdata.departements.map(item => {
        return { value: item._id, label: item.nameDepartement }
    }) : [];
    const Designations = designationsData ? designationsData.designations.map(item => {
        return { value: item._id, label: item.nameDesignation }
    }) : [];
    const optionsGender = [
        { value: 'male', label: 'male' },
        { value: 'female', label: 'female' }
    ];

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-6">
                <div className="block">
                    <label className="text-sm text-gray-600" htmlFor="firstName">
                        First Name
                    </label>
                    <Controller
                        name='firstName'
                        control={control}
                        render={({ field }) => <input type="text" className="mt-0 form-input block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none" {...field} placeholder="First Name" />}
                    />
                </div>
                <div className="block">
                    <label className="text-sm text-gray-600" htmlFor="lastName">
                        Last Name
                    </label>
                    <Controller
                        name='lastName'
                        control={control}
                        render={({ field }) => <input type="text" className="mt-0 form-input block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none" {...field} placeholder="Last Name" />}
                    />
                </div>
                {/* end row 1 */}
                <div className="block">
                    <label className="text-sm text-gray-600" htmlFor="username">
                        Username
                    </label>
                    <Controller
                        name='username'
                        control={control}
                        render={({ field }) => <input type="text" className="mt-0 form-input block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none" {...field} placeholder="Username" minLength={5} required />}
                    />
                </div>
                <div className="block">
                    <label className="text-sm text-gray-600" htmlFor="email">
                        Email
                    </label>
                    <Controller
                        name='email'
                        control={control}
                        render={({ field }) => <input type="email" className="mt-0 form-input block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none" {...field} placeholder="Email" required />}
                    />
                </div>
                {/* end row 2 */}
                <div className="block">
                    <label className="text-sm text-gray-600" htmlFor="password">
                        Password
                    </label>
                    <Controller
                        name='password'
                        control={control}
                        render={({ field }) => <input type="password" className="mt-0 form-input block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none" {...field} placeholder="Password" minLength={8} required />}
                    />
                </div>
                <div className="block">
                    <label className="text-sm text-gray-600" htmlFor="passwordConfirm">
                        Password Confirm
                    </label>
                    <Controller
                        name='passwordConfirm'
                        control={control}
                        render={({ field }) => <input type="password" className="mt-0 form-input block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none" {...field} placeholder="Password Confirm" />}
                    />
                </div>
                {/* end row 3 */}
                <div className="block">
                    <label className="text-sm text-gray-600" htmlFor="gender">
                        Gender
                    </label>
                    <Controller
                        name='gender'
                        control={control}
                        render={({ field: { onChange, value } }) => <Select
                            isClearable
                            value={optionsGender.find((e) => e.value === value)}
                            onChange={(e) => onChange(e.value)}
                            options={optionsGender}
                        />}
                    />
                </div>
                <div className="block">
                    <label className="text-sm text-gray-600" htmlFor="DOB">
                        Date Of Birthday
                    </label>
                    <Controller
                        name='DOB'
                        control={control}
                        render={({ field }) => <input type="date" className="mt-0 form-input block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none" {...field} required />}
                    />
                </div>
                {/* end row 4 */}
                <div className="block">
                    <label className="text-sm text-gray-600" htmlFor="departement">
                        Departement
                    </label>
                    <Controller
                        name='departement'
                        control={control}
                        render={({ field: { onChange, value } }) => <Select
                            isClearable
                            value={Departements.find((e) => e.value === value)}
                            onChange={(e) => onChange(e.value)}
                            options={Departements}
                        />}
                    />
                </div>
                <div className="block">
                    <label className="text-sm text-gray-600" htmlFor="designation">
                        Designation
                    </label>
                    <Controller
                        name='designation'
                        control={control}
                        render={({ field: { onChange, value } }) => <Select
                            isClearable
                            value={Designations.find((e) => e.value === value)}
                            onChange={(e) => onChange(e.value)}
                            options={Designations}
                        />}
                    />
                </div>
                {/* end row 5 */}
            </div>
        </form>
    )
}

export default FormEmploye