import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useGetDepartements, useGetDesignations, useGetCountries, useGetCityByRegion, useGetRegionByCountry } from '@/apollo/action';
import Select from "react-select"
import { useRouter } from 'next/router';
const FormEmploye = ({ onSubmit, initialdata = {} }) => {
    const router = useRouter();
    const { control, setValue, clearErrors, handleSubmit, resetField, watch, setError, formState: { errors } } = useForm();
    const { loading: departementLoading, error: departementError, data: departementsdata } = useGetDepartements();
    const { loading: designationLoading, error: designationError, data: designationsData } = useGetDesignations();
    const { data: countriesData } = useGetCountries();
    const [getRegions, { data: regionsData }] = useGetRegionByCountry();
    const [getCity, { data: citiesData }] = useGetCityByRegion();
    const Countries = countriesData ? countriesData.countries.map(item => {
        return { value: item._id, label: item.name }
    }) : [];
    const Regions = regionsData ? regionsData.regionByCountry.map(item => {
        return { value: item._id, label: item.name }
    }) : [];
    const Cities = citiesData ? citiesData.cityByRegion.map(item => {
        return { value: item._id, label: item.name }
    }) : [];
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
    const optionRole = [
        { value: 'employes', label: 'Employes' },
        { value: 'guests', label: 'Guests' }
    ];
    const optionIdentitas = [
        { value: 'KTP', label: 'KTP' },
        { value: 'SIM', label: 'SIM' },
        { value: 'PASSPORT', label: 'PASSPORT' },
    ]
    const valuesCountry = watch('country');
    const valuesRegion = watch('region');
    useEffect(() => {
        if (valuesCountry && valuesCountry.length >= 1) {
            getRegions({ variables: { countryId: valuesCountry } });
        }

    }, [valuesCountry]);
    useEffect(() => {
        if (valuesRegion && valuesRegion.length >= 1) {
            getCity({ variables: { regionId: valuesRegion } });
        }
    }, [valuesRegion]);
    useEffect(() => {
        if (initialdata) {
            // setValue('id', initialdata?._id);
            setValue('firstName', initialdata.firstName, { shouldTouch: true });
            setValue('lastName', initialdata.lastName, { shouldTouch: true })
            setValue('email', initialdata.email, { shouldTouch: true })
            setValue('username', initialdata.username, { shouldTouch: true })
            setValue('gender', initialdata.gender, { shouldTouch: true });
            setValue('DOB', initialdata.DOB && new Date(initialdata.DOB).toISOString().split('T')[0], { shouldTouch: true });
            setValue('departement', initialdata.departement?._id, { shouldTouch: true });
            setValue('designation', initialdata.designation?._id, { shouldTouch: true });
            setValue('country', initialdata.country?._id, { shouldTouch: true });
            setValue('city', initialdata.city?._id, { shouldTouch: true });
            setValue('region', initialdata.region?._id, { shouldTouch: true });
            setValue('address', initialdata.address, { shouldTouch: true });
            setValue('identitas', initialdata.identitas, { shouldTouch: true });
            setValue('noIdentitas', initialdata.noIdentitas, { shouldTouch: true });
            setValue('role', initialdata.role, { shouldTouch: true });
            setValue('phone', initialdata.phone, { shouldTouch: true });
        }
    }, [initialdata])
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-6">
                {/* <input type="hidden" name='id' /> */}
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
                        render={({ field: { onChange, value, onBlur } }) => <input type="date" className="mt-0 form-input block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none"
                            onChange={e => onChange(e.target.value)}
                            onBlur={onBlur}
                            value={value}
                        />}
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
                <div className="block col-span-2">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="block">
                            <label className="text-sm text-gray-600" htmlFor="departement">
                                Country
                            </label>
                            <Controller
                                name='country'
                                control={control}
                                render={({ field: { onChange, value, onBlur } }) => <Select
                                    onBlur={onBlur}
                                    isClearable
                                    value={Countries.find((e) => e.value === value)}
                                    defaultValue={Countries.find((item) =>
                                        Countries?.includes(item.value)
                                    )}
                                    onChange={(e) => onChange(e?.value)}
                                    options={Countries}
                                />}
                            />
                        </div>
                        <div className="block">
                            <label className="text-sm text-gray-600" htmlFor="departement">
                                Region
                            </label>
                            <Controller
                                name='region'
                                control={control}
                                render={({ field: { onChange, value, onBlur } }) => <Select
                                    onBlur={onBlur}
                                    isClearable
                                    value={Regions.find((e) => e.value === value)}
                                    defaultValue={Regions.find((item) =>
                                        Regions?.includes(item.value)
                                    )}
                                    onChange={(e) => {
                                        onChange(e?.value)
                                    }}

                                    options={Regions}
                                />}
                            />
                        </div>
                        <div className="block">
                            <label className="text-sm text-gray-600" htmlFor="departement">
                                City
                            </label>
                            <Controller
                                name='city'
                                control={control}
                                render={({ field: { onChange, value, onBlur } }) => <Select
                                    onBlur={onBlur}
                                    isClearable
                                    value={Cities.find((e) => e.value === value)}
                                    defaultValue={Cities.find((item) =>
                                        Cities?.includes(item.value)
                                    )}
                                    onChange={(e) => {
                                        onChange(e?.value)
                                    }}

                                    options={Cities}
                                />}
                            />
                        </div>
                    </div>
                </div>
                {/* end row 6 */}
                <div className="block col-span-2">
                    <label className="text-sm text-gray-600" htmlFor="address">
                        Address
                    </label>
                    <Controller
                        name='address'
                        control={control}
                        render={({ field }) => <textarea className='mt-0 form-textarea  block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none' {...field} cols={10} rows={5} />}
                    />
                </div>
                {/* end row 7 */}
                <div className="block">
                    <label className="text-sm text-gray-600" htmlFor="identitas">
                        identity
                    </label>
                    <Controller
                        name='identitas'
                        control={control}
                        render={({ field: { onChange, value, onBlur } }) => <Select
                            onBlur={onBlur}
                            isClearable
                            value={optionIdentitas.find((e) => e.value === value)}
                            defaultValue={optionIdentitas.find((item) =>
                                optionIdentitas?.includes(item.value)
                            )}
                            onChange={(e) => {
                                onChange(e?.value)
                            }}
                            options={optionIdentitas}
                        />}
                    />
                </div>
                <div className="block">
                    <label className="text-sm text-gray-600" htmlFor="noIdentitas">
                        No identity
                    </label>
                    <Controller
                        name='noIdentitas'
                        control={control}
                        rules={{ maxLength: 32 }}
                        render={({ field: { onChange, value } }) => <input type="text" className="mt-0 form-input block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none" placeholder="320xxxxxx"
                            value={value} onChange={e => {
                                const p = e.target.value;
                                if (p.length <= 32 && !isNaN(Number(p)) && p) {
                                    onChange(p);
                                } else if (p.length > 32) {
                                    setError('noIdentitas', { type: 'custom', message: 'Oops..!!, Phone Number no more than 32 digits' });
                                    setTimeout(() => clearErrors('noIdentitas'), 4000);
                                }
                            }} />}
                    />
                    {errors.noIdentitas && <p className='text-red-500 text-sm font-bold'>{errors.noIdentitas.message}</p>}
                </div>
                {/* end row 8 */}

                <div className="block">
                    <label className="text-sm text-gray-600" htmlFor="phone">
                        Phone
                    </label>
                    <Controller
                        name='phone'
                        control={control}
                        render={({ field: { onChange, onBlur, value, },
                            fieldState: { invalid, isTouched, isDirty, error },
                            formState, }) => <input type="text" className="mt-0 form-input block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none" placeholder="089xxxx" value={value} onChange={e => {
                                const p = e.target.value;
                                if (p.length <= 13 && !isNaN(Number(p)) && p) {
                                    onChange(p);
                                } else if (p.length > 13) {
                                    setError('phone', { type: 'custom', message: 'Oops..!!, Phone Number no more than 13 digits' });
                                    setTimeout(() => clearErrors('phone'), 4000);
                                }
                            }} />}
                    />
                    {errors.phone && <p className='text-red-500 text-sm font-bold'>{errors.phone.message}</p>}
                </div>
                <div className="block">
                    <label className="text-sm text-gray-600" htmlFor="role">
                        Role
                    </label>
                    <Controller
                        name='role'
                        control={control}
                        render={({ field: { onChange, value, onBlur } }) => <Select
                            onBlur={onBlur}
                            isClearable
                            value={optionRole.find((e) => e.value === value)}
                            defaultValue={optionRole.find((item) =>
                                optionRole?.includes(item.value)
                            )}
                            onChange={(e) => {
                                onChange(e?.value)
                            }}
                            options={optionRole}
                        />}
                    />
                </div>
                {/* end row 9 */}
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
                        onClick={() => router.push("/admin/employes")}
                        className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        back
                    </button>
                </div>
            </div>
        </form>
    )
}

export default FormEmploye