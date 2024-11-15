export type MediaProp = {
  id: number;
  title: string;
  description: string;
  file_url: string;
  type: "image" | "video";
  likes: number;
  created_at: string;
  liked: boolean;
};

type Props = {
  item: MediaProp;
  onLike: (id: number) => void;
};

export const MediaItem: React.FC<Props> = ({ item, onLike }) => (
  <div className="media-item">
    {item.type === "image" ? (
      <img src={item.file_url} alt="media" className="media" />
    ) : (
      <video src={item.file_url} controls className="media" />
    )}
    <button onClick={() => onLike(item.id)} className="like-button">
      {item.liked ? "Unlike" : "Like"} ({item.likes})
    </button>
  </div>
);
