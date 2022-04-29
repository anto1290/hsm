import React from 'react'
import { useSignUp } from '@/apollo/action';
import { FormEmploye, LayoutAdmin } from '@/components'

const New = () => {
    const [createEmploye, { loading, error, data: createEmployes }] = useSignUp();
    const handleSubmit = (data) => {
        console.log(data)
    }
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