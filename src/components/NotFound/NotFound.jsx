import './NotFound.css'
import Notfound from '../../assets/icon/rafiki.png'
const NotFound = () => {
    return (
        <div className='center-not-found'>
            <div className='page-not-found'>
                <img src={Notfound} alt="Notfound"></img>
                <h2 className='title-not-found'>صفحه مورد نظر پیدا نشد!</h2>
            </div>
        </div>
    )
}
export default NotFound