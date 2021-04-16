import "./Video.css";

const Video = () => {
  return (
    <div className="video">
      {/* <video width="99%" height="100%" controls={false}>
        <source
          src="https://www.tiktok.com/@colormecourtney/video/6827047671711157510"
          type="video/mp4"
        />
      </video> */}
      <iframe
        height="100%"
        width="100%"
        src="https://www.tiktok.com/@colormecourtney/video/6827047671711157510"
        title="tiktok"
      ></iframe>
    </div>
  );
};

export default Video;
