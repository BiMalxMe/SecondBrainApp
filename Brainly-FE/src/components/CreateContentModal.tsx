import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";

export const CreateContentModel = ({ open, onclose }) => {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-200 fixed top-0 left-0 opacity-90 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white  p-4 rounded">
              <div className="flex justify-end cursor-pointer" onClick={onclose}>
                <CrossIcon size="lg"/>
              </div>
              <div>
                <Input placeholder="Title" />
                <Input placeholder="Link" />
              </div>
              <div className="flex justify-center">

              <Button size="md" variant="primary" text="Submit"/>
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
function Input({ placeholder, onChange }: { onChange: () => void }) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="px-8 py-4 border rounded m-2"
      />
    </div>
  );
}
