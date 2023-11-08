import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";
import moment from "moment";

const BorrowedBook = ({borrowBook,deleteMutate}) => {
 const {_id, name, bookImg,date,email,borrowedDate,bookName,category ,uniqueId}=borrowBook 
 console.log(borrowBook);

 console.log(borrowBook);
 
  const axios = useAxios()
  // book return button
// last

 const handleBookReturn=async(id)=>{

  try {

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
        <tr className=' mt-12'>

        <div className='flex items-center md:gap-9 '>
        <td>
          <div className="flex items-center  space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle ">
                <img className=" w-10 h-10" src={bookImg} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{bookName}</div>
              <div className="text-xs lg:text-lg opacity-50"> Return Date: {date}</div>
            </div>
          </div>
        </td>
 
        <td className="text-sm lg:text-xl"> 
      
     
          <span className=" ">categrory:{category}</span>
        </td>
        <td className="text-sm lg:text-xl"> 
       <span> Borrowed:{moment().format("MMM Do YY")} </span>
          <br/>
          <span className=" ">Name: {bookName}</span>
        </td>
        <th>
          <button onClick={()=>handleBookReturn(_id)}  className="btn btn-error  text-white btn-xs">Return</button>
        </th>
        </div>
     
      
      </tr>
    );
};

export default BorrowedBook;