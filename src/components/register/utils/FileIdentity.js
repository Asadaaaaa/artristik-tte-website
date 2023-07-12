import Image from 'next/image';
import { useState, useRef } from 'react';

import KtpIllustration from '~/images/register/ktp-illustration.jpeg';

import getBase64 from '@/handlers/getBase64';

export default function FileIdentity({ setData }) {

  const inputFileRef = useRef(null);
  const [warningText, setWarningText] = useState("");
  const [image, setImage] = useState(null);

  const uploadFile = async (file) => {

    setWarningText("");

    if (file.type !== "image/jpeg" && file.type !== "image/jpg") {
      setWarningText("Jenis file harus jpg/jpeg!");
      
      return;
    }

    if (file.size > 2097152) {
      setWarningText("Ukuran file maks. 2MB");
      
      return;
    }

    const base64 = await getBase64(file);
    setImage(base64);
    setData(base64);

    return;
  }

  return (
    <>
      <div 
        className="flex flex-col items-center py-6 gap-6 border-2 border-dashed border-slate-400 rounded-xl cursor-pointer"
        onClick={() => {
          if (inputFileRef.current === null) return;

          inputFileRef.current.click();
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();

          if (e.dataTransfer.files.length === 0) return;

          const file = e.dataTransfer.files[0];
          uploadFile(file);
        }}
      >
        {
          image ? (
            <Image
              src={image}
              alt='ktp-upload'
              width={192}
              height={192}
              className="w-72 rounded-lg"
            />
          ) : (
            <Image 
              src={KtpIllustration}
              alt='ktp-illustration'
              className="w-72 rounded-lg"
            />
          )
        }
        <h4 className="text-sm text-slate-600">Tarik gambar KTP yang asli ke sini atau klik untuk cari</h4>
        {
          warningText && (
            <h4 className="text-sm text-red-600">{warningText}</h4>
          )
        }
      </div>
      <input 
        type="file"
        accept="image/jpeg,image/jpg"
        className="hidden"
        ref={inputFileRef}
        onChange={async(e) => {
          if (e.target.files.length === 0) return;

          const file = e.target.files[0];
          uploadFile(file);
        }}
      />
    </>
  );
}