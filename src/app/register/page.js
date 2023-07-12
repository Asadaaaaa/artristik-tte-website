import Main from './Main';

const getCountryMasterdata = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_ROOT + "/primary/masterdata/country", {
    method: "GET",
    headers: {
      "ngrok-skip-browser-warning": "true",
    }
  }).then((res) => res.json());
  
  return res.data;
} 

export default async function Register() {

  const countryMasterdata = await getCountryMasterdata();

  return (
    <Main countryMasterdata={countryMasterdata} />
  );
}