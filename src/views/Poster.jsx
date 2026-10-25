// Poster.jsx
import { imageUrl } from "../Controls/api";

function Poster({ path, alt, size = "w500" }) {
  const src = imageUrl(path, size);
  return src ? (
    <img src={src} alt={alt} loading="lazy" className="poster-img" />
  ) : (
    <div className="poster-img poster-fallback">No image</div>
  );
}
export default Poster;