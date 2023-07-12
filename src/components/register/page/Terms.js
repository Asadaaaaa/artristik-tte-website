import Card from '@/components/register/utils/Card';
import Button from '@/components/register/utils/Button';
import CardTitle from '@/components/register/utils/CardTitle';

export default function Terms({ next }) {
  return (
    <Card>
      <div className="flex flex-col gap-4">
        <CardTitle title={"Syarat Penggunaan & Kebijakan Privasi"} />
        <div className="flex justify-center">
          <Button
            text={"Lanjut"}
            onClick={() => next()}
          />
        </div>
      </div>
    </Card>
  );
}