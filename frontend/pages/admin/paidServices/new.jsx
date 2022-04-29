import { useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import { LayoutAdmin, FormService } from "@/components";
import { useCreateService } from "@/apollo/action";
const New = () => {
    const router = useRouter();
    const [createService, { loading, error, data: service }] = useCreateService()
    const handleSubmit = (data) => {
        const input = {
            name: data.name,
            roomType: data.roomType,
            price: parseInt(data.price, 10),
            description: data.description,
            typePrice: data.typePrice,
            active: data.active
        }
        createService({ variables: input })
    }
    useEffect(() => {
        if (service && service.createService) {
            router.push("/admin/paidServices");
        }
    }, [service])

    return (
        <LayoutAdmin>
            <section className="container mt-12">
                <div className="flex justify-between p-2">
                    <h1 className="text-2xl font-bold block">Create Paid Service</h1>
                    <h1 className="text-sm font-bold mt-8 pr-2">
                        <span className="text-gray-400">
                            admin {"> "}Price Manager {"> "}
                        </span>
                        New Service
                    </h1>
                </div>

                <div className="w-[80vw] p-5">
                    <FormService onSubmit={handleSubmit} />
                </div>
                {error && <div className="text-red-500">{error.message}</div>}
            </section>
        </LayoutAdmin>
    )
}

export default New