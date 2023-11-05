import React from 'react';

const BorrowedBook = ({borrowBook}) => {
 const {_id, name, bookImg,date,email,borrowedDate }=borrowBook || {} ;
    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={bookImg} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50"> Return Date: {date}</div>
            </div>
          </div>
        </td>
        <td>
         { borrowedDate }
          <br/>
          <span className="badge badge-ghost badge-sm">{email}</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default BorrowedBook;