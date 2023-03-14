import Layout from "../Layout";
import { Params, useParams } from "react-router-dom";

export default function PageProfile() {
  const { username }: Params = useParams();

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center space-y-10">
        <div className="text-4xl font-bold ">Este es el perfil de:</div>
        <div className="text-9xl font-bold text-gray-700"> {username} </div>
      </div>
    </Layout>
  );
}
