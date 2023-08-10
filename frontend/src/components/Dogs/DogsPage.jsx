import React from "react";
import DogsCard from "./DogsCard";

const DogsPage = (props) => {
    const { allDogs } = props;
    return (
        <div>
            <section className="dogs-container">
                {allDogs.map((dog) => {
                    return (
                        <div key={dog.id}>
                            <DogsCard
                                id={dog.id}
                                name={dog.name}
                                breed={dog.breed}
                                description={dog.description}
                                price={dog.price}
                                imageUrl={dog.imageUrl}
                            />
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

export default DogsPage;
