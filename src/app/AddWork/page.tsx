"use client";
import { UploadButton } from "@/utils/uploadthing";
import postsWork from "./_action/action";

function Page() {
  return (
    <div className=" h-screen w-screen gap-10 flex flex-col justify-center items-center  ">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          postsWork({ name: res[0].name, url: res[0].url });
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}

export default Page;
