import { useState } from 'react';

import Card from '@/components/register/utils/Card';
import Input from '@/components/register/utils/Input';
import Button from '@/components/register/utils/Button';
import CardTitle from '@/components/register/utils/CardTitle';
import CardSubtitle from '@/components/register/utils/CardSubtitle';

export default function Personal({ dataPersonal, setDataPersonal, next }) {
  
  const [errorText, setErrorText] = useState({
    id: "",
    name: "",
    birthdate: "",
    email: "",
    phone_number: "",
  });

  const dataPattern = {
    id: /^[0-9]+$/,
    name: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
    birthdate: /^\d{4}-\d{2}-\d{2}$/,
    email: /^\S+@\S+\.\S+$/,
    phone_number: /^\+?[0-9]+$/,
  }

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
              if (isNaN(e.target.value) || e.target.value === " ") return;

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
              setErrorText({ ...errorText, name: ""});
              setDataPersonal({ ...dataPersonal, name: e.target.value})
            }}
          />
          <Input
            type={"date"}
            placeholder={"Tanggal Lahir"}
            errorText={errorText.birthdate}
            value={dataPersonal.birthdate}
            onChange={(e) => {
              setErrorText({ ...errorText, birthdate: ""});
              setDataPersonal({ ...dataPersonal, birthdate: e.target.value })
            }}
          />
        </div>
        <div className="flex flex-col gap-2 px-3">
          <h2 className="mb-1">Kontak Personal</h2>
          <Input
            type={"text"}
            placeholder={"Email"}
            maxLength={100}
            errorText={errorText.email}
            value={dataPersonal.email}
            onChange={(e) => {
              setErrorText({ ...errorText, email: ""});
              setDataPersonal({ ...dataPersonal, email: e.target.value})
            }}
          />
          <Input
            type={"text"}
            placeholder={"Nomor Telepon"}
            maxLength={20}
            errorText={errorText.phone_number}
            value={dataPersonal.phone_number}
            onChange={(e) => {
              setErrorText({ ...errorText, phone_number: ""});
              setDataPersonal({ ...dataPersonal, phone_number: e.target.value})
            }}
          />
        </div>
        <Button
          text={"Lanjut"}
          onClick={() => {
            if (dataPersonal.id.length !== 16 || !dataPattern.id.test(dataPersonal.id)) {
              setErrorText({ ...errorText, id: "NIK Tidak Valid"});

              return;
            }

            if (dataPersonal.name.length < 2) {
              setErrorText({ ...errorText, name: "Panjang Minimum Input 2 Karakter"});

              return;
            }

            if (!dataPattern.name.test(dataPersonal.name)) {
              setErrorText({ ...errorText, name: "Input hanya terdiri dari karakter alfabet, dengan kata-kata yang dipisahkan oleh satu spasi dan tidak ada spasi yang berurutan"})

              return;
            }

            if (dataPersonal.birthdate.length !== 10 || !dataPattern.birthdate.test(dataPersonal.birthdate)) {
              setErrorText({ ...errorText, birthdate: "Tanggal Tidak Valid"});

              return;
            }

            if (dataPersonal.email.length < 5 || !dataPattern.email.test(dataPersonal.email)) {
              setErrorText({ ...errorText, email: "Email Tidak Valid"});

              return;
            }

            if (dataPersonal.phone_number.length < 5 || !dataPattern.phone_number.test(dataPersonal.phone_number)) {
              setErrorText({ ...errorText, phone_number: "No Telepon Tidak Valid"});

              return;
            }

            next();
          }}
        />
      </div>
    </Card>
  );
}