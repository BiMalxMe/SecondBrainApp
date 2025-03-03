import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { Backend_url } from "../config";
import axios from "axios";

enum contentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export const CreateContentModel = ({ open, onclose }) => {
  const titleRef = useRef<HTMLInputElement>();
  const LinkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(contentType.Youtube);
  async function addContent() {
    const title = titleRef.current?.value;
    const link = LinkRef.current?.value;
    const res = await axios.post(Backend_url+"/api/v1/content",{
      link,
      title,
      type
    },{
    headers:{
      "Authorization":localStorage.getItem("token")
    }
  })
  alert(res.data.msg)
  }
  return (
    <div>
      {open && <div>
        <div className="w-screen h-screen bg-slate-200 fixed top-0 left-0 opacity-90 flex justify-center">
             </div>
             <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white  p-4 rounded">
              <div
                className="flex justify-end cursor-pointer"
                onClick={onclose}
              >
                <CrossIcon size="lg" />
              </div>
              <div>
                <Input reference={titleRef} placeholder="Title" />
                <Input reference={LinkRef} placeholder="Link" />
              </div>
              <div className="flex justify-center bold underline underline-offset-8 mb-3
">Choose Type</div>
              <div className="flex justify-center gap-4">
                <Button
                  text="Youtube"
                  //variant rquires primary or secondary
                  variant={
                    type === contentType.Youtube ? "primary" : "secondary"
                  }
                  onclick={() => {
                    setType(contentType.Youtube);
                  }}
                />
                <Button
                  text="Twitter"
                  variant={
                    type === contentType.Twitter ? "primary" : "secondary"
                  }
                  onclick={() => {
                    setType(contentType.Twitter);
                  }}
                />
              </div>
              <div className="flex justify-center mt-5">
                <Button size="md" variant="primary" text="Submit" fullwidth={true} onclick={addContent}/>
              </div>
            </span>
          </div>
          </div>
        </div>
      }
    </div>
  );
};
