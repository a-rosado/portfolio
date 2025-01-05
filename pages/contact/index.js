// // components
// import Circles from '/components/Circles';

// // icons
// import { BsArrowRight } from 'react-icons/bs';

// // framer
// import { motion } from 'framer-motion';

// // variants
// import { fadeIn } from '../../variants';

// const Contact = () => {
//   return (
//     <div className='h-full bg-primary/30'>
//       <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
//         {/* text & form */}
//         <div className='flex flex-col w-full max-w-[700px]'>
//           {/* text */}
//           <motion.h2
//             variants={fadeIn('up', 0.2)}
//             initial='hidden'
//             animate='show'
//             exit='hidden'
//             className='h2 text-center mb-12'
//           >
//             Let's <span className='text-accent'>connect.</span>
//           </motion.h2>
//           {/* form */}
//           <motion.form
//             variants={fadeIn('up', 0.4)}
//             initial='hidden'
//             animate='show'
//             exit='hidden'
//             className='flex-1 flex flex-col gap-6 w-full mx-auto'
//           >
//             {/* input group */}
//             <div className='flex gap-x-6 w-full'>
//               <input type='text' placeholder='name' className='input' />
//               <input type='text' placeholder='email' className='input' />
//             </div>
//             <input type='text' placeholder='subject' className='input' />
//             <textarea placeholder='message' className='textarea'></textarea>
//             <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
//               <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
//                 Let's talk
//               </span>
//               <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
//             </button>
//           </motion.form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;



import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import { fadeIn } from '../../variants';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('Sending...');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Email sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error sending email.');
    }
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            <div className='flex gap-x-6 w-full'>
              <input
                type='text'
                name='name'
                placeholder='name'
                value={formData.name}
                onChange={handleChange}
                className='input'
                required
              />
              <input
                type='email'
                name='email'
                placeholder='email'
                value={formData.email}
                onChange={handleChange}
                className='input'
                required
              />
            </div>
            <input
              type='text'
              name='subject'
              placeholder='subject'
              value={formData.subject}
              onChange={handleChange}
              className='input'
              required
            />
            <textarea
              name='message'
              placeholder='message'
              value={formData.message}
              onChange={handleChange}
              className='textarea'
              required
            ></textarea>
            <button
              type='submit'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let's talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
          {status && <p className='mt-4 text-sm'>{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;

