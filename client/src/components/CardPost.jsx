import TrashIcon from "./icons/TrashIcon";
import HeartIcon from "./icons/heart-solid";

export default function CardPost({ post, deletePostById, likePostById }) {
  return (
    <article className="card mb-4">
      <img
        src={post.img}
        alt=""
        className="card-img-top"
      />
      <div className="card-body">
        <h5>{post.titulo}</h5>
        <p>{post.descripcion}</p>
        <div className="d-flex mt-3 justify-content-between align-items-center">
          <div>
            <HeartIcon
              fill="red"
              height="25"
              onClick={() => {
                likePostById(post.id);
              }}
              className="cursor-pointer"
            />
            <span className="ms-2">{post.likes}</span>
          </div>
          <div>
            <TrashIcon
              fill="red"
              height="25"
              onClick={() => {
                deletePostById(post.id);
              }}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
