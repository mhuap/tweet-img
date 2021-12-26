export default function UnsplashPhoto({id, user, urls, download_location, handlePhotoClick}) {

  
  return (
    <div className="unsplash-photo" key={id}>
      <img src={urls.regular} onClick={(e) => handlePhotoClick(e, download_location)}/>

      <span>Photo by <a
          className="credit"
          target="_blank"
          href={`https://unsplash.com/@${user.username}?utm_source=tweet-img&utm_medium=referral`}
        >
          { user.name}
        </a>
      </span>
    </div>
    )
}
