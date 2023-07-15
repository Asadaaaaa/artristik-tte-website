"use client"

import { useState } from 'react';

import Terms from '@/components/register/page/Terms';
import Selfie from '@/components/register/page/Selfie';
import Country from '@/components/register/page/Country';
import Summary from '@/components/register/page/Summary';
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
  });
  const [dataSelfie, setDataSelfie] = useState(null);

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
            dataPersonal={dataPersonal}
            setDataPersonal={setDataPersonal}
            next={() => setStep("3")}
          />
        )
      }
      {
        step === "3" && (
          <Selfie
            setDataSelfie={setDataSelfie}
            next={() => setStep("4")}
          />
        )
      }
      {
        step === "4" && (
          <Summary 
            next={() => setStep("5")}
          />
        )
      }
    </div>
  );
}