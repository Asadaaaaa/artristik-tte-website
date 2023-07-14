import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

import Card from '@/components/register/utils/Card';
import Button from '@/components/register/utils/Button';
import CardTitle from '@/components/register/utils/CardTitle';
import SearchMenu from '@/components/register/utils/SearchMenu';
import SearchInput from '@/components/register/utils/SearchInput';
import CardSubtitle from '@/components/register/utils/CardSubtitle';

export default function Country({ countryMasterdata, dataCountry, setDataCountry, next }) {

  const [countryInput, setCountryInput] = useState("");

  return (
    <Card>
      <div className="flex flex-col gap-2">
        <CardTitle title={"Pilih Kewarganegaraan Anda"} />
        <CardSubtitle subtitle={"Silakan pilih negara Anda untuk menentukan dokumen identitas apa yang akan dipindai. Dokumen identitas diperlukan untuk memvalidasi identitas Anda."} />
      </div>
      <hr />
      <div className="relative">
        <SearchInput
          type={"text"}
          placeholder={"Ketik untuk mencari..."}
          value={countryInput}
          onChange={(e) => {
            setCountryInput(e.target.value);
          }}
        />
        <div className="absolute right-0 top-0 h-full flex items-center">
          <BiSearch className="text-slate-500 w-6 h-6 mr-4" />
        </div>
      </div>
      <SearchMenu 
        keyword={countryInput} 
        setKeyword={setCountryInput} 
        options={countryMasterdata}
        selectedMenu={dataCountry}
        setSelectedMenu={setDataCountry}
      />
      <div className="flex justify-center">
        <Button
          text={"Lanjut"}
          disabled={!dataCountry}
          onClick={() => {
            if (dataCountry === null) return;

            next();
          }}
        />
      </div>
    </Card>
  );
}