import Card from '@/components/register/utils/Card';
import Button from '@/components/register/utils/Button';
import CardTitle from '@/components/register/utils/CardTitle';
import FileIdentity from '@/components/register/utils/FileIdentity';
import CardSubtitle from '@/components/register/utils/CardSubtitle';

export default function Identity({ dataIdentity, setDataIdentity, next }) {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <CardTitle title={"Unggah Kartu Tanda Penduduk Anda"} />
          <CardSubtitle subtitle={"Dokumen ini diperlukan untuk memverifikasi identitas Anda. Gunakan KTP asli atau Surat Keterangan Kependudukan"} />
        </div>
        <FileIdentity setData={setDataIdentity} />
        <div className="flex justify-center">
          <Button
            text={"Lanjut"}
            disabled={!dataIdentity}
            onClick={() =>{
              if (dataIdentity === null) return;

              next();
            }}
          />
        </div>
      </div>
    </Card>
  );
}