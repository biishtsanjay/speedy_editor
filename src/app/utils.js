import { toPng } from "html-to-image";

export const imageDownload = async (ref) => {
  if (ref.current === null) {
    return;
  }
  toPng(ref.current)
    .then(async (dataUrl) => {
      const link = document.createElement("a");
      link.download = "Download.png";
      link.href = dataUrl;
      link.click();
    })
    .catch((err) => {
      console.log("error downloading ", err);
    });
};
