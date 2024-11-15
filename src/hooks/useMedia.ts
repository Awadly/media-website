import { useState, useEffect } from "react";
import { type MediaProp } from "../components/MediaItem";
import {
  fetchMedia,
  createMediaItem,
  uploadFile,
} from "../services/mediaServices";

export const useMedia = () => {
  const [media, setMedia] = useState<MediaProp[]>([]);

  useEffect(() => {
    (async () => {
      const mediaData = await fetchMedia();
      setMedia(mediaData);
    })();
  }, []);

  const handleLike = (id: number): void => {
    setMedia((prevMedia) =>
      prevMedia.map((item) =>
        item.id === id
          ? {
              ...item,
              likes: item.liked ? item.likes - 1 : item.likes + 1,
              liked: !item.liked,
            }
          : item
      )
    );
  };

  const handleUpload = async (file: File) => {
    try {
      const { fileURL, fileType } = await uploadFile(file);
      const fileCategory: "image" | "video" = fileType.startsWith("video")
        ? "video"
        : "image";
      const newMedia = {
        title: "Uploaded Media",
        description: "No description available",
        file_url: fileURL,
        type: fileCategory,
      };
      const savedMedia = await createMediaItem(newMedia);
      setMedia((prevMedia) => [savedMedia, ...prevMedia]);
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };

  return { media, handleLike, handleUpload };
};
