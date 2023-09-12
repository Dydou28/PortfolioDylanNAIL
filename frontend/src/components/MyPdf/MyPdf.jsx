import "./MyPdf.scss";

import PdfDylan from "/home/dylan/Documents/Dylan documents/CV et lettre de motivation/CV_07_23_Dylan_NAIL.pdf";

export default function MyPdf() {
  const handleDownload = () => {
    window.open(PdfDylan, "_blank"); // Ouvre le PDF dans une nouvelle fenêtre ou un nouvel onglet
  };

  return (
    <div>
      <button onClick={handleDownload}>Télécharger Mon CV</button>
    </div>
  );
}
