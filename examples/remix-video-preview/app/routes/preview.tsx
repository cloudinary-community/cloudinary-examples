import type { MetaFunction } from "@remix-run/node";
import videos from "~/lib/videos.json";
import { Video } from "./Video";

export const meta: MetaFunction = () => {
  return [
    { title: "Cloudinary Video Preview" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="grid grid-cols-5 gap-10">
      <div className="col-span-5">
        <img src="/images/logo.png" alt="YouTube Shorts" width="100" />
      </div>
      {videos.map((video, index) => {
        return <Video video={video} key={index} />;
      })}
    </div>
  );
}
