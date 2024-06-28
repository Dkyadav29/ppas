// import { useForm, Controller } from 'react-hook-form';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';

// const SignUpForm = () => {
//   const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
//   const onSubmit = async data => {
//     try {
//       const response = await fetch('http://localhost:5000/api/users/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       });

//       const result = await response.json();
//       if (response.ok) {
//         alert('User signed up successfully');
//       } else {
//         console.error('Error:', result.error);
//         alert(result.error);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
//       <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Sign Up</h2>
      
//       <div className="mb-6">
//         <label className="block text-gray-700 font-bold mb-2">Name</label>
//         <input 
//           {...register("name", { required: true })} 
//           className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         />
//         {errors.name && <span className="text-red-500">This field is required</span>}
//       </div>

//       <div className="mb-6">
//         <label className="block text-gray-700 font-bold mb-2">Email</label>
//         <input 
//           {...register("email", { required: true })} 
//           className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         />
//         {errors.email && <span className="text-red-500">This field is required</span>}
//       </div>

//       <div className="mb-6">
//         <label className="block text-gray-700 font-bold mb-2">Phone</label>
//         <Controller
//           name="phone"
//           control={control}
//           rules={{ required: true }}
//           render={({ field }) => (
//             <PhoneInput
//               {...field}
//               country={'us'}
//               inputProps={{
//                 required: true,
//                 className: `w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`
//               }}
//             />
//           )}
//         />
//         {errors.phone && <span className="text-red-500">This field is required</span>}
//       </div>

//       <div className="mb-6">
//         <label className="block text-gray-700 font-bold mb-2">Password</label>
//         <input 
//           {...register("password", { required: true })} 
//           type="password" 
//           className={`w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         />
//         {errors.password && <span className="text-red-500">This field is required</span>}
//       </div>

//       <div className="mb-6">
//         <label className="block text-gray-700 font-bold mb-2">Confirm Password</label>
//         <input 
//           {...register("confirmPassword", {
//             required: true,
//             validate: (value) => value === watch('password')
//           })} 
//           type="password" 
//           className={`w-full px-4 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
//         />
//         {errors.confirmPassword && <span className="text-red-500">Passwords must match</span>}
//       </div>

//       <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md font-bold hover:bg-blue-600 transition duration-300">Sign Up</button>
//     </form>
//   );
// };

// export default SignUpForm;


import { useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';

const SignUpForm = () => {
  const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
  const [showSuccess, setShowSuccess] = useState(false); // State to track showing success popup

  const onSubmit = async data => {
    try {
      const response = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      if (response.ok) {
        setShowSuccess(true); // Show success popup on successful signup
      } else {
        console.error('Error:', result.error);
        alert(result.error); // Show error message if signup fails
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.'); // Show generic error message
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Sign Up</h2>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input 
            {...register("name", { required: true })} 
            className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input 
            {...register("email", { required: true })} 
            className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.email && <span className="text-red-500">This field is required</span>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Phone</label>
          <Controller
            name="phone"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <PhoneInput
                {...field}
                country={'us'}
                inputProps={{
                  required: true,
                  className: `w-full px-4 py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`
                }}
              />
            )}
          />
          {errors.phone && <span className="text-red-500">This field is required</span>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input 
            {...register("password", { required: true })} 
            type="password" 
            className={`w-full px-4 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.password && <span className="text-red-500">This field is required</span>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Confirm Password</label>
          <input 
            {...register("confirmPassword", {
              required: true,
              validate: (value) => value === watch('password')
            })} 
            type="password" 
            className={`w-full px-4 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.confirmPassword && <span className="text-red-500">Passwords must match</span>}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md font-bold hover:bg-blue-600 transition duration-300">Sign Up</button>
      </form>

      {/* Success popup */}
      {showSuccess && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-green-500 mb-4">Congratulations!</h3>
            <p className="text-gray-700">You have successfully signed up.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-600 transition duration-300" onClick={() => setShowSuccess(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
