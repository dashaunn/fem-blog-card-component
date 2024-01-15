import React from "react"
import illustrationImg from "../assets/images/illustration-article.svg"
import authorImg from "../assets/images/image-avatar.webp"

export default function PreviewCard() {
    return (
            <article className="preview_card">
                
                <img src={illustrationImg} alt="code fragment illustration" className="preview_card--img"/>
             
                <p className="topic">Learning</p>

                <p className="date">Published 21 Dec 2023</p>

                <h2>
                    <a href="#" className="preview_card--title">HTML & CSS foundations</a>
                </h2>

                <p className="preview_card--text">These languages are the backbone of every website, defining structure, content, and presentation.</p>

                <div className="author_info">
                    <img src={authorImg} alt="author avatar" className="author_img"/>
                    <p className="author_name">Greg Hooper</p>
                </div>
                
            </article>
    )
}