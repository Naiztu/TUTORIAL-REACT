import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export interface IuseAxiosProps {
  url: string;
}

export interface IuseAxiosResponse {
  loading: boolean;
  data: any;
  error: AxiosError | unknown;
}

const useAxios = ({ url = "" }: IuseAxiosProps): IuseAxiosResponse => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<AxiosError | unknown>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, data, error };
};

export default useAxios;
