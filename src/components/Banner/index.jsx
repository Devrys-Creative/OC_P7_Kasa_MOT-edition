import "../../assets/style/Banner.scss";


function Banner({ title, img, alt }) {

    return (
        <div className="banner">
            <img className="banner__img" src={ img } alt={ alt } />
            <h2 className="banner__title">{ title }</h2>
        </div>
    );

}

export default Banner;