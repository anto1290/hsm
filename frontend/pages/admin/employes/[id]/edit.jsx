import React, { useEffect } from 'react'
import { useGetUserById, useUpdateUser } from '@/apollo/action';
import { FormEmploye, LayoutAdmin } from '@/components';
import { useRouter } from 'next/router';

const Edit = () => {
    const router = useRouter();
    const { id } = router.query;
    const [updateUser, { error: updateError, loading: updateLoading, data: updateData }] = useUpdateUser();
    const [getUser, { loading, error, data: dataUser }] = useGetUserById()
    useEffect(() => {
        if (id) {
            getUser({ variables: { id } })
        }
    }, [id])
    const handleSubmit = (data) => {
        const input = {
            "firstName": data.firstName,
            "lastName": data.lastName,
            "username": data.username,
            "email": data.email,
            "gender": data.gender,
            "DOB": data.DOB,
            "departement": data.departement,
            "designation": data.designation,
            "country": data.country,
            "city": data.city,
            "region": data.region,
            "address": data.address,
            "identitas": data.identitas,
            "noIdentitas": data.noIdentitas,
            "phone": data.phone,
            "role": data.role,
        }
        updateUser({ variables: { id, input } });
    }
    useEffect(() => {
        if (updateData && updateData.updateUser) {
            router.push('/admin/employes');
        }
    }, [updateData]);
    return (
        <LayoutAdmin>
            <section className="container mt-12">
                <div className="flex justify-between p-2">
                    <h1 className="text-2xl font-bold block">Edit Employes</h1>
                    <h1 className="text-sm font-bold mt-8 pr-2">
                        <span className="text-gray-400">
                            admin {"> "}Employes {"> "}
                        </span>
                        Update
                    </h1>
                </div>

                <div className="w-[80vw] p-5">
                    <FormEmploye onSubmit={handleSubmit} initialdata={(dataUser && dataUser.userById) || {}} />
                </div>
                {error && <div className="text-red-500">{error.message}</div>}
            </section>
        </LayoutAdmin>
    )
}

export default Edit