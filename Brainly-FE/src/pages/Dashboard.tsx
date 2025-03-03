import "../index.css";

import { Button } from "../components/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Card } from "../components/Card";
import { CreateContentModel } from "../components/CreateContentModal";
import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";

export function Dashboard() {
  const contents = useContent()
  console.log(JSON.stringify(contents))
  const [modalOpen, setmodalOpen] = useState(false);
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="p-4 ml-74 min-h-screen bg-gray-100 ">
      <CreateContentModel
        open={modalOpen}
        onclose={() => {
          setmodalOpen(false);
        }}
      />
      <div className="flex justify-end gap-4">
        <Button
          onclick={()=>{
            setmodalOpen(true)
          }}
          variant="primary"
          size="md"
          text="Add Content"
          startIcon={<PlusIcon size="md"></PlusIcon>}
        ></Button>
        <Button
          variant="secondary"
          size="md"
          text="Share Brain"
          startIcon={<ShareIcon size="md" />}
        ></Button>
      </div>
      <div className="flex gap-4 flex-wrap">
        {contents.map(({title,link,type}) => <Card
          type={type}
          link={link}
          title={title}
        />)
      }
      </div>
    </div>
    </div>
  );
}

