function Food() {
    return (
        <a href="!#">
            <div class="food">
                <img alt="Lorem ipsum dolor sit amet" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" src={process.env.PUBLIC_URL + '/images/foodimage.svg'} />
                <div class="food-info">
                    <h1>Lorem ipsum dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <span class="expanded-line"></span>
                <span class="food-price">Rs 222</span>
            </div>
        </a>
    );
}

export default Food;