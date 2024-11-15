import { MediaItem, type MediaProp } from "./MediaItem";

type Props = {
  media: MediaProp[];
  onLike: (id: number) => void;
};

const MediaList: React.FC<Props> = ({ media, onLike }) => (
  <div className="media-container">
    {media.map((item) => (
      <MediaItem key={item.id} item={item} onLike={onLike} />
    ))}
  </div>
);

export default MediaList;
