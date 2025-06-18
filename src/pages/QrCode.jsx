import { QRCodeCanvas } from 'qrcode.react';

function QrCode() {
  const url = "https://osk-haru.github.io/math-club-site/";


  return (
    <main style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>スマホでアクセス！</h2>
      <p>下のQRコードを読み取ってアクセスしてみてください。</p>
      <QRCodeCanvas value={url} size={200} />
      <p style={{ marginTop: '1rem' }}>{url}</p>
    </main>
  );
}

export default QrCode;
