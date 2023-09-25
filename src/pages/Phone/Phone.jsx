import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const Phone = () => {
  const [phone, setPhone] = useState([]);
  const { id } = useParams();

  const phones = useLoaderData();

  useEffect(() => {
    const findPhone = phones?.find((phoneDetails) => phoneDetails.id === id);
    setPhone(findPhone);
  }, [id, phones]);

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <PhoneCard phone={phone}></PhoneCard>
    </div>
  );
};

export default Phone;
