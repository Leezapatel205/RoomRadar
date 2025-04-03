import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Contact = ({ listing }) => {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        console.log("Fetching Landlord Data...");
        const token = localStorage.getItem("token"); // Token fetch karo
        if (!token) {
          console.error("No token found!");
          return;
        }

        const res = await axios.get(`http://localhost:5000/api/user/${listing.userRef}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        console.log("Landlord Data Fetched:", res.data);
        setLandlord(res.data);
      } catch (error) {
        console.error("Error fetching landlord:", error);
      }
    };

    fetchLandlord();
  }, [listing.userRef]);

  const handleSendEmail = () => {
    if (!landlord || !landlord.email) {
      alert("Landlord email not found!");
      return;
    }
    const subject = `Regarding ${listing.name}`;
    const body = `Hello, I am interested in your listing: ${listing.name}. ${message}`;
    const mailtoLink = `mailto:${landlord.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="mt-5 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold">Contact {landlord?.username} for {listing?.name}</h2>

      {landlord ? (
        <>
          <textarea
            className="w-full border p-2 mt-2 rounded"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            onClick={handleSendEmail}
            className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            SEND MESSAGE
          </button>
        </>
      ) : (
        <p className="text-gray-500">Loading landlord details...</p>
      )}
    </div>
  );
};

export default Contact;

// export default function Contact({ listing }) {
//   const [landlord, setLandlord] = useState(null);
//   const [message, setMessage] = useState('');
//   const onChange = (e) => {
//     setMessage(e.target.value);
//   };

 

//   useEffect(() => {
//     const fetchLandlord = async () => {
//       try {
//         console.log("userRef", listing.userRef); // ✅ Check this
//         const res = await axios.get(`http://localhost:5000/api/user/${listing.userRef}`);
//         console.log("leeza", res.data);
//         setLandlord(res.data);
//       } catch (error) {
//         console.log("error fetching landlord:", error);
//       }
//     };
//     fetchLandlord();
//   }, [listing.userRef]);
  

//   return (
 
//     <>
//          {landlord && (
//         <div className='flex flex-col gap-2'>
//           <p>
//             Contact <span className='font-semibold'>{landlord.username}</span>{' '}
//             for{' '}
//             <span className='font-semibold'>{listing.name.toLowerCase()}</span>
//           </p>
//           <textarea
//             name='message'
//             id='message'
//             rows='2'
//             value={message}
//             onChange={onChange}
//             placeholder='Enter your message here...'
//             className='w-full border p-3 rounded-lg'
//           ></textarea>

//           <Link
//           to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
//           className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95'
//           >
//             Send Message          
//           </Link>
//         </div>
//       )}
//     </>
//   );
// }
