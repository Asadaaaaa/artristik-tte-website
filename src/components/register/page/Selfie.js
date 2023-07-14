import { useRef, useEffect, useState } from 'react';

import Card from '@/components/register/utils/Card';
import Button from '@/components/register/utils/Button';
import CardTitle from '@/components/register/utils/CardTitle';
import CardSubtitle from '@/components/register/utils/CardSubtitle';

export default function Selfie({ setDataSelfie, next }) {
  
  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [status, setStatus] = useState(null);
  const [errorText, setErrorText] = useState("");

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ 
        video: {
          width: 480
        }
      }).then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
        setStatus("video");
      }).catch((err) => {
        setErrorText("Pastikan Perangkat Memiliki Kamera dan Pastikan Telah Mengizinkan Akses Kamera");
      });
  };

  const stopVideo = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
  
    for (let i = 0; i < tracks.length; i++) {
      let track = tracks[i];
      track.stop();
    }
  
    videoRef.current.srcObject = null;
  };

  const paintToCanvas = () => {
    let video = videoRef.current;
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");

    const width = 480;
    const height = 360;
    photo.width = width;
    photo.height = height;

    return ctx.drawImage(video, 0, 0, width, height);
  };

  const usePhoto = () => {
    const photo = photoRef.current.toDataURL("image/jpeg");

    setDataSelfie(photo);

    next();
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <Card>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <CardTitle title={"Ambil Swafoto"} />
          <CardSubtitle subtitle={"Mohon aktifkan kamera di aplikasi web dan klik Izinkan untuk mengambil swafoto."} />
        </div>
        <hr />
        {
          errorText && (
            <h3 className="text-center text-red-500 font-semibold">{errorText}</h3>
          )
        }
        <video ref={videoRef} className={status === "video" ? "block" : "hidden"} />
        <div className={"flex justify-center " + (status === "video" ? "block" : "hidden")}>
          <Button
            text={"Ambil Foto"}
            onClick={() => {
              paintToCanvas();
              stopVideo();
              setStatus("image");
            }}
          />
        </div>
        <canvas ref={photoRef} className={status === "image" ? "block" : "hidden"} />
        <div className={"flex justify-center gap-6 " + (status === "image" ? "block" : "hidden")}>
          <Button
            text={"Ambil Ulang Foto"}
            onClick={() => getVideo()}
          />
          <Button
            text={"Gunakan Foto"}
            onClick={() => usePhoto()}
          />
        </div>
      </div>
    </Card>
  );
}