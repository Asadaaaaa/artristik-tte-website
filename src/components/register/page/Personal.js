import { useState } from 'react';

import Card from '@/components/register/utils/Card';
import Input from '@/components/register/utils/Input';
import CardTitle from '@/components/register/utils/CardTitle';
import CardSubtitle from '@/components/register/utils/CardSubtitle';

export default function Personal({ dataPersonal, setDataPersonal }) {
  
  const [errorText, setErrorText] = useState({
    id: "",
    name: "",
    birthdate: "",
    email: "",
    phone_number: "",
  });

  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <CardTitle title={"Masukkan Data Diri"} />
          <CardSubtitle subtitle={"Masukkan data identitas Anda berdasarkan KTP atau Surat Keterangan Kependudukan. Masukkan juga email dan nomor telepon yang aktif"} />
        </div>
        <hr />
        <div className="flex flex-col gap-2 px-3">
          <h2 className="mb-1">Data KTP</h2>
          <Input
            type={"text"}
            placeholder={"Nomor Kependudukan"}
            maxLength={16}
            errorText={errorText.id}
            value={dataPersonal.id}
            onChange={(e) => {
              if (isNaN(e.target.value)) return;

              setErrorText({ ...errorText, id: ""});
              setDataPersonal({ ...dataPersonal, id: e.target.value})
            }}
          />
          <Input
            type={"text"}
            placeholder={"Nama Lengkap Sesuai KTP"}
            maxLength={60}
            errorText={errorText.name}
            value={dataPersonal.name}
            onChange={(e) => {
              if (isNaN(e.target.value)) return;
              
              setErrorText({ ...errorText, name: ""});
              setDataPersonal({ ...dataPersonal, name: e.target.value})
            }}
          />
        </div>
      </div>
    </Card>
  );
}