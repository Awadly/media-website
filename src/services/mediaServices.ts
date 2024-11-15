import axios from "axios";
import { MediaProp } from "../components/MediaItem";

const API_URL = "https://awadly.duckdns.org/api/media/";

export const fetchMedia = async (): Promise<MediaProp[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const uploadFile = async (file: File) => {
  const uniqueFileName = `${Date.now()}-${file.name}`;
  const fileType = file.type;

  const response = await axios.get(`${API_URL}/preSignedURL`, {
    params: { fileName: uniqueFileName, fileType },
  });

  const { uploadURL, fileURL } = response.data;

  await axios.put(uploadURL, file, { headers: { "Content-Type": file.type } });
  return { fileURL, fileType: file.type };
};

export const createMediaItem = async (mediaData: Partial<MediaProp>) => {
  const response = await axios.post(API_URL, mediaData);
  return response.data;
};
