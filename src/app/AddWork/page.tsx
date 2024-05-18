"use client";

import { UploadButton } from "@/utils/uploadthing";
import postsWork from "./_action/action";
import { ClientUploadedFileData } from "uploadthing/types";

function Page() {
  const onCreate = async (
    res: ClientUploadedFileData<{ uploadedBy: string }>[]
  ) => {
    console.log("Files: ", res);
    const result = await postsWork({ name: res[0].name, url: res[0].url });
    result.succsess ? alert(result.msg) : alert(result.msg);
  };
  return (
    <div className=" h-screen w-screen gap-10 flex flex-col justify-center items-center  ">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => onCreate(res)}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}
export default Page;
