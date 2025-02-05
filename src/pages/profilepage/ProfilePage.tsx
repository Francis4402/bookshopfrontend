import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import UpdateProfileModel from "./UpdateProfileModel";
import { useGetSingleUserQuery } from "../../redux/features/auth/authApi";
import { useParams } from "react-router-dom";
import { TUser } from "../../redux/features/auth/authSlice";


const ProfilePage = () => {

  const {id} = useParams<{id: string}>();

  const {data: userData} = useGetSingleUserQuery(id ?? "") as {data: TUser[] | undefined};

  const user = userData?.[0];


  const [modal1Open, setModal1Open] = useState(false);


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden p-8 flex flex-col md:flex-row items-center md:items-start">
        <div className="flex flex-col items-center text-center md:w-1/3 p-4">
          <LazyLoadImage
            effect="blur"
            src={user?.profileImage}
            alt="Profile"
            className="w-40 h-40 rounded-full shadow-md border-4 border-gray-300"
          />
          <h1 className="text-3xl font-bold text-gray-800 mt-4 capitalize">{user?.name}</h1>
          <p className="text-gray-600 font-medium mt-2">Role: {user?.role}</p>
        </div>

        <div className="md:w-2/3 p-4">
          <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">Profile Information</h2>
          <div className="mt-4 space-y-2">
          <p className="text-gray-600"><strong>Email:</strong> {user?.email}</p>
            <p className="text-gray-600"><strong>Date of Birth:</strong> {user?.dateofbirth && new Date(user.dateofbirth).toISOString().split('T')[0]}</p>
            <p className="text-gray-600"><strong>Address:</strong> {user?.address}</p>
            <p className="text-gray-600"><strong>Gender:</strong> {user?.gender}</p>
            <p className="text-gray-600"><strong>Phone:</strong> {user?.phone}</p>

            <UpdateProfileModel setModal1Open={setModal1Open} modal1Open={modal1Open} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage