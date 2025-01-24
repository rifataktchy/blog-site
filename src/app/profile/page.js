import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Profile = async () => {
   const {getUser} = getKindeServerSession();
   const user = await getUser();
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Welcome {user?.given_name} to your profile!</h1>
         
      </div>
    );
  }

  export default Profile;