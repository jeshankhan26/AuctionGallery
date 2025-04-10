import React from "react";
import { FaRegHeart } from "react-icons/fa";

const blog = ({ blog }) => {
  console.log(blog);
  return (
    <>
      <tbody>
        <tr className="border-b border-[#DCE5F3]">
          <td>
            <div className="flex gap-3">
              <img src={blog.image} className="w-10" />
              <h2 className="sora text-[#0E2954]">{blog.title}</h2>
            </div>
          </td>
          <td>${blog.currentBidPrice}</td>
          <td>{blog.timeLeft}</td>
          <td className="pl-8">
            <FaRegHeart className="h-7 " />
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default blog;
