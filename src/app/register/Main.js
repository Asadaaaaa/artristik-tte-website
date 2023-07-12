"use client"

import { useState } from 'react';

import Terms from '@/components/register/page/Terms';
import Country from '@/components/register/page/Country';
import Identity from '@/components/register/page/Identity';
import Personal from '@/components/register/page/Personal';

export default function Main({ countryMasterdata }) {

  const [step, setStep] = useState("country");
  const [dataCountry, setDataCountry] = useState(null);
  const [dataIdentity, setDataIdentity] = useState(null);
  const [dataPersonal, setDataPersonal] = useState({
    id: "",
    name: "",
    birthdate: "",
    email: "",
    phone_number: "",
  })

  return (
    <div className="bg-sky-500 flex justify-center items-center py-20 min-h-screen">
      {
        step === "country" && (
          <Country
            countryMasterdata={countryMasterdata}
            dataCountry={dataCountry} 
            setDataCountry={setDataCountry} 
            next={() => setStep("terms")}
          />
        )
      }
      {
        step === "terms" && (
          <Terms
            next={() => setStep("1")}
          />
        )
      }
      {
        step === "1" && (
          <Identity
            dataIdentity={dataIdentity}
            setDataIdentity={setDataIdentity}
            next={() => setStep("2")}
          />
        )
      }
      {
        step === "2" && (
          <Personal
            next={() => setStep("3")}
            dataPersonal={dataPersonal}
            setDataPersonal={setDataPersonal}
          />
        )
      }
    </div>
  );
}