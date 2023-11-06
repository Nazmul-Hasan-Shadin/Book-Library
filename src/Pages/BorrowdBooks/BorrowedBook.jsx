import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";

const BorrowedBook = ({borrowBook,deleteMutate}) => {
 const {_id, name, bookImg,date,email,borrowedDate,bookName,uniqueId}=borrowBook 

 console.log(borrowBook);
 
  const axios = useAxios()
  // book return button
// last

 const handleBookReturn=async(id)=>{

  try {
    // await axios.delete(`/borrowed-books/${id}`)
    // .then(result=>{
    //   if (result.data.deletedCount>0) {
    //     toast.success('Book Return Successfull')
    //   }
     
    // })
  
      deleteMutate(id)
      
        //  books:id(category)
   const response=  await axios.put(`/findbooksbyid/${uniqueId}`)

   if (response.data) {
      console.log(response.data,'data bro');
      

   }

  } catch (error) {
    console.log(error);
  }
  console.log(id);


 }


    return (
        <tr className=' py-8'>

        <div className='flex items-center md:gap-9 '>
        <td>
          <div className="flex items-center  space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle h-24">
                <img src={bookImg} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{bookName}</div>
              <div className="text-sm opacity-50"> Return Date: {date}</div>
            </div>
          </div>
        </td>
        <td>
         { borrowedDate }
          <br/>
          <span className="badge badge-ghost badge-sm">{email}</span>
        </td>
        <th>
          <button onClick={()=>handleBookReturn(_id)}  className="btn btn-ghost btn-xs">Return</button>
        </th>
        </div>
     
      
      </tr>
    );
};

export default BorrowedBook;