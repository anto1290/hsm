import { useMemo, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LayoutAdmin, FormService } from "@/components";
import { useUpdateService, useGetService } from "@/apollo/action";
const Edit = () => {
    const router = useRouter();
    const [updateService, { loading, error, data: service }] = useUpdateService()
    const { id } = router.query;
    const { data: getServices } = useGetService({ variables: { id } });
    const [services, setServices] = useState({});
    useEffect(() => {
        if (getServices && getServices.service) {
            const roomTypes = []
            getServices.service.roomType.map((item) => roomTypes.push(item._id));
            setServices({
                id: getServices.service._id,
                name: getServices.service.name,
                roomType: roomTypes,
                price: parseInt(getServices.service.price, 10),
                description: getServices.service.description,
                typePrice: getServices.service.typePrice,
                active: getServices.service.active
            });
        }
    }, [getServices])
    const handleSubmit = (data) => {
        console.log(data);
        const input = {
            name: data.name,
            roomType: data.roomType,
            price: parseInt(data.price, 10),
            description: data.description,
            typePrice: data.typePrice,
            active: data.active
        }
        updateService({ variables: { id: data.id, input } })
    }
    useEffect(() => {
        if (service && service.updateService) {
            router.push('/admin/paidServices')
        }
    }, [service])

    return (
        <LayoutAdmin>
            <section className="container mt-12">
                <div className="flex justify-between p-2">
                    <h1 className="text-2xl font-bold block">Edit Paid Service</h1>
                    <h1 className="text-sm font-bold mt-8 pr-2">
                        <span className="text-gray-400">
                            admin {"> "}Price Manager {"> "}
                        </span>
                        Edit Service
                    </h1>
                </div>

                <div className="w-[80vw] p-5">
                    <FormService onSubmit={handleSubmit} initialdata={services} />
                </div>
                {error && <div className="text-red-500">{error.message}</div>}
            </section>
        </LayoutAdmin>
    )
}

export default Edit