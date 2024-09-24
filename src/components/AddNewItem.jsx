import { useFormik } from "formik";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';

function AddNewItem() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            image: '',
            name: '',
            price: '',
            size: '',
            toppings: '',
            category: '',
            description: ''
        },
        validationSchema: Yup.object({
            image: Yup.string().required('Image URL is required'),
            name: Yup.string()
                .min(5, 'Name must be at least 5 characters')
                .required('Name is required'),
            price: Yup.number()
                .min(1, 'Price must be greater than 0')
                .required('Price is required')
        }),
        onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
            axios.post('http://localhost:7000/pizzas/add', values)
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
            <h2 className="text-2xl font-bold mb-6 mt-5">Add New Pizza</h2>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
                    <input
                        id="image"
                        name="image"
                        type="text"
                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${formik.touched.image && formik.errors.image ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.image}
                    />
                    {formik.touched.image && formik.errors.image ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.image}</div>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${formik.touched.price && formik.errors.price ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                    />
                    {formik.touched.price && formik.errors.price ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.price}</div>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
                    <input
                        id="size"
                        name="size"
                        type="number"
                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${formik.touched.size && formik.errors.size ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.size}
                    />
                    {formik.touched.size && formik.errors.size ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.size}</div>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                    <input
                        id="category"
                        name="category"
                        type="text"
                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${formik.touched.category && formik.errors.category ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.category}
                    />
                    {formik.touched.category && formik.errors.category ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.category}</div>
                    ) : null}
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm ${formik.touched.description && formik.errors.description ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                    />
                    {formik.touched.description && formik.errors.description ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.description}</div>
                    ) : null}
                </div>

                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddNewItem;
