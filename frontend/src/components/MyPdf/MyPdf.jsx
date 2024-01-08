import "./MyPdf.scss";

import PdfDylan from "/home/dylan/Documents/Dylan documents/CV et lettre de motivation/CV_12_23_Dylan_NAIL.pdf";

export default function MyPdf() {
  const handleDownload = () => {
    window.open(PdfDylan, "_blank"); // Ouvre le PDF dans une nouvelle fenêtre ou un nouvel onglet
  };

  return (
    <div>
      <button onClick={handleDownload} className="cv">
        Télécharger Mon CV
      </button>
    </div>
  );
}
