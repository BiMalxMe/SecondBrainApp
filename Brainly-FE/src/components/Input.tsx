export function Input({ placeholder, onChange,reference }: { onChange?: () => void , reference?:any , placeholder:string}) {
    return (
      <div>
        <input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          className="px-8 py-4  rounded m-2"
          ref={reference}
        />
      </div>
    );
  }