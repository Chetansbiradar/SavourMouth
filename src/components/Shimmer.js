const Shimmer = () => {
    return (
        <>
        <div style={{marginTop:22}}></div>
        <div className="cards">
        {Array(10).fill("").map((item, index) => (
            <div className="cardShimmer" key={index}>
                <div className="shimmerBG media"></div>
                <div className="p-32"></div>
                <div className="shimmerBG title-line"></div>
                <div className="shimmerBG title-line end"></div>

                <div className="shimmerBG content-line m-t-24"></div>
                <div className="shimmerBG content-line"></div>
                <div className="shimmerBG content-line"></div>
                <div className="shimmerBG content-line end"></div>
            </div>
        ))}
        </div>
    </>
    );
}

export default Shimmer;