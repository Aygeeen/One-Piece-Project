import React from "react";


export default function Home() {
    return (
        <>
            <div className="video-container">
                <video width="430" height="360" controls>
                    <source src="/images/edit.mp4" type="video/mp4"/>
                </video>
            </div>
        </>
    )
}
