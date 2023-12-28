"use client";
import { RefObject, useEffect, useMemo, useState } from "react";
import CustomDialog from "./ui/customDialog";
import CloseVersionSvg from "../icons/closeVersion";

type ImageProviderProps = {
  imgUrl: string;
  imageRef: RefObject<HTMLDialogElement>;
};

const ImageProvider: React.FC<ImageProviderProps> = ({ imgUrl, imageRef }) => {
  const [selectedImageLoading, setSelectedImageLoading] = useState(false);
  //   useEffect(() => {
  //     console.log("selectedImageLoading", selectedImageLoading);
  //   }, [selectedImageLoading]);

  useEffect(() => {
    console.log("mounted");

    let timeout: NodeJS.Timeout;
    if (imageRef.current == null) return;
    // console.log(imageRef.current.open);
    //console.log("open ", imageRef.current?.open);

    timeout = setTimeout(() => {
      console.log("selectedImageLoading inside open", selectedImageLoading);
      // console.log("worked ", imageRef.current?.open);
      // console.log("This will run once after the delay Open");
      setSelectedImageLoading(false);
    }, 500);

    return () => {
      setSelectedImageLoading(true);
      console.log("Un mounted");
      clearInterval(timeout);
    };
  }, [imgUrl, imageRef.current]);

  return (
    <div className="">
      <CustomDialog
        className=" w-[50%] min-h-[50vh] min-w-[50vh] max-h-[50vh] aspect-[5/6]  mx-auto my-auto backdrop:!bg-[#333] backdrop:opacity-90
        min-[768px]:aspect-square min-[992px]:aspect-[1/4] min-[768px]:max-h-[70vh]
        "
        dialogRef={imageRef}
      >
        <div className="w-full h-full">
          {selectedImageLoading ? (
            <div className="flex justify-center items-center w-full h-full bg-black text-white">
              LOADING
            </div>
          ) : (
            <img
              className="w-full h-full object-cover object-[center_center]"
              src={imgUrl}
            />
          )}
        </div>
      </CustomDialog>
    </div>
  );
};

export default ImageProvider;
