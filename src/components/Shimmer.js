const Shimmer = () => {
    let shimmerCards = [];
    for(let i=0;i<10;i++) {
        shimmerCards.push(
        <div className="cardShimmer" key={i}>
                <div className="shimmerBG media"></div>
                <div className="p-32"></div>
                <div className="shimmerBG title-line"></div>
                <div className="shimmerBG title-line end"></div>

                <div className="shimmerBG content-line m-t-24"></div>
                <div className="shimmerBG content-line"></div>
                <div className="shimmerBG content-line"></div>
                <div className="shimmerBG content-line"></div>
                <div className="shimmerBG content-line end"></div>
            </div>
        );
    }
    return (
        <div className="cards">
            {
                shimmerCards.map((card) => card)
            }
        </div>
    );
}

export default Shimmer;