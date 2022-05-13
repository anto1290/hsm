import React, { useEffect } from 'react'
import { useSignUp } from '@/apollo/action';
import { FormEmploye, LayoutAdmin } from '@/components';
import { useRouter } from 'next/router';

const New = () => {
    const router = useRouter();
    const [createEmploye, { loading, error, data: createEmployes }] = useSignUp();
    const handleSubmit = (data) => {
        const input = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            username: data.username,
            password: "12345678",
            passwordConfirm: "12345678",
            gender: data.gender,
            DOB: data.DOB,
            departement: data.departement,
            designation: data.designation,
            country: data.country,
            city: data.city,
            region: data.region,
            address: data.address,
            identitas: data.identitas,
            noIdentitas: data.noIdentitas,
            phone: data.phone,
            role: data.role,
        }
        createEmploye({ variables: input })
    }
    useEffect(() => {
        if (createEmployes && createEmployes.signUp) {
            alert('Success')
            router.push('/admin/employes');
        }
    }, [createEmployes]);
    return (
        <LayoutAdmin>
            <section className="container mt-12">
                <div className="flex justify-between p-2">
                    <h1 className="text-2xl font-bold block">Create Employes</h1>
                    <h1 className="text-sm font-bold mt-8 pr-2">
                        <span className="text-gray-400">
                            admin {"> "}Employes {"> "}
                        </span>
                        New
                    </h1>
                </div>

                <div className="w-[80vw] p-5">
                    <FormEmploye onSubmit={handleSubmit} />
                </div>
                {error && <div className="text-red-500">{error.message}</div>}
            </section>
        </LayoutAdmin>
    )
}

export default New