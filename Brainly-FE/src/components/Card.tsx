import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
  link: String;
  title: String;
  type: "twitter" | "youtube";
}

export const Card = ({ title, link, type }: CardProps) => {
  return (
    <div className="bg-white rounded-md  border-gray-200 max-w-72 border p-4
    min-w-72 min-h-58 ">
      <div className="flex justify-between">
        <div className="flex items-center text-md">
          <div className="text-gray-500 pr-2">
            <ShareIcon size="md" />
          </div>
          {title}{" "}
        </div>
        <div className="flex items-center">
          <div className="pr-2 text-gray-500">
            <ShareIcon size="md" />
          </div>
          <div className="text-gray-500">
            <a href={link} target="_blank">
              <ShareIcon size="md" />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-4">
        {type === "youtube" && (
          <iframe
            className="w-full"
            src={link.replace("watch", "embed").replace("?v=", "/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x", "twitter")}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
};
