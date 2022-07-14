import React, { useEffect, useRef, useState } from "react";

const Img = (props) => {
    const [img, setImg] = useState(props.imgBlackUrl);
    const imgRef = useRef();

    useEffect(() => {
        imgRef.current.addEventListener("mouseover", () => {
            setImg(props.imgColorUrl);
        });
        imgRef.current.addEventListener("mouseout", () => {
            setImg(props.imgBlackUrl);
        });
    });

    return (
        <div>
          <img ref={imgRef} src={img} alt="MyImage" />
        </div>
    );
};

export default Img;