import React from "react";

function Gallery(props) {
    const currentCategory = {
        name: "commercial",
        description:
        "Portfolio of jobs completed for clients",
    };

    return (
        <section>
        <h1>{currentCategory.name}</h1>
        <p>{currentCategory.description}</p>
        </section>
    );
    }

    return (
        <section>
        <h1>My Work</h1>
        <div className="flex-row">
            <img
            src={require(`../../assets/`).default}
            alt="computer"
            className="img-thumbnail mx-1"
            />
            <img
            src={require(`../../assets/`).default}
            alt="keyboard"
            className="img-thumbnail mx-1"
            />
            <img
            src={require(`../../assest/`).default}
            alt="monitor"
            className="img-thumbnail mx-1"
            />
        </div>
        </section>
    );


export default Gallery;