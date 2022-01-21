import css from './Header.module.css';

export default () => {
    return(
        <>
        <div className={`${css.main}`}>
            <div className={`${css.item}`}>
                <img className={`${css.image}`} src='icons/scb-logo.png' alt='noImage'></img>
            </div>
        <div>
        <img style={{width: '20px', marginRight: '10px'}} src='icons/settings.png' />
        </div>
        </div>
        </>
    )
}
//https://www.sc.com/global/av/standard_chartered_logo_svg.svg