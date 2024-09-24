import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from 'yup';
import { useEffect, useState } from "react";

function UpdateItem() {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:7000/pizzas/getbyid/${id}`)
            .then(response => {
                setVehicle(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the vehicle data', error);
            });
    }, [id]);

    const formik = useFormik({
        initialValues: {
            image: vehicle?.image || '',
            name: vehicle?.name || '',
            price: vehicle?.price || '',
            size: vehicle?.size || '',
            category: vehicle?.category || '',
            description: vehicle?.description || ''
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            image: Yup.string().required('Image URL is required'),
            name: Yup.string()
                .min(5, 'Name must be at least 5 characters')
                .required('Name is required'),
            price: Yup.number()
                .min(1, 'Price must be greater than 0'),
        }),
        onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
            axios.put(`http://localhost:7000/pizzas/update/${id}`, values)
                .then(response => {
                    setStatus('success');
                    resetForm();
                    navigate('/display');
                })
                .catch(error => {
                    setStatus('error');
                })
                .finally(() => {
                    setSubmitting(false);
                });
        },
    });

    return (
        <div className="pt-16 container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6 mt-5">Update Pizza</h2>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
                {[
                    { id: 'image', label: 'Image URL', type: 'text' },
                    { id: 'name', label: 'Name', type: 'text' },
                    { id: 'price', label: 'Price', type: 'number' },
                    { id: 'size', label: 'Size', type: 'text' },
                    { id: 'category', label: 'Category', type: 'text' },
                    { id: 'description', label: 'Description', type: 'text' }
                ].map(({ id, label, type }) => (
                    <div key={id}>
                        <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
                        <input
                            id={id}
                            name={id}
                            type={type}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values[id]}
                        />
                        {formik.touched[id] && formik.errors[id] ? (
                            <div className="text-red-600 text-sm mt-1">{formik.errors[id]}</div>
                        ) : null}
                    </div>
                ))}

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default UpdateItem;
