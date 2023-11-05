import useAxios from "../../Hooks/useAxios";

const BorrowedBook = ({borrowBook}) => {
 const {_id, name, bookImg,date,email,borrowedDate,bookName }=borrowBook 
 console.log(borrowBook);
 
  const axios = useAxios()
 const handleBookReturn=async(id)=>{
  console.log(id);
    await axios.delete(`/borrowed-books/${id}`)
    .then(res=>{
      
      axios.get(`/`)

    })
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