import { useState, useEffect } from "react";
import { type MediaProp } from "../components/MediaItem";
import {
  fetchMedia,
  createMediaItem,
  uploadFile,
  unlikeMediaItem,
  likeMediaItem,
} from "../services/mediaServices";

export const useMedia = () => {
  const [media, setMedia] = useState<MediaProp[]>([]);

  useEffect(() => {
    (async () => {
      const mediaData = await fetchMedia();
      setMedia(mediaData);
    })();
  }, []);

  const handleLike = async (id: number): Promise<void> => {
    const mediaItem = media.find((item) => item.id === id);
    if (!mediaItem) return;

    const { liked } = mediaItem;
    try {
      setMedia((prevMedia) =>
        prevMedia.map((item) =>
          item.id === id
            ? {
                ...item,
                likes: liked ? item.likes - 1 : item.likes + 1,
                liked: !liked,
              }
            : item
        )
      );

      // Make the API request to like or unlike
      if (liked) {
        await unlikeMediaItem(id);
      } else {
        await likeMediaItem(id);
      }
    } catch (error) {
      console.error("Error updating like status:", error);
      // Revert state if the request fails
      setMedia((prevMedia) =>
        prevMedia.map((item) =>
          item.id === id
            ? {
                ...item,
                likes: liked ? item.likes + 1 : item.likes - 1,
                liked,
              }
            : item
        )
      );
    }
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
      const updatedMedia = { ...savedMedia, likes: 0, liked: false };
      setMedia((prevMedia) => [updatedMedia, ...prevMedia]);
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };

  return { media, handleLike, handleUpload };
};
