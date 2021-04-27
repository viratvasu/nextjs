import styles from './header.module.scss';
const Header = ()=>{
    return (
        <div className={styles.navbar+ " container"}>
            <p className={styles.logo}>Brand Logo</p>
            <div className={styles.navlinks}>
                <a href="#" className={styles.navlink}>Products</a>
                <a href="#" className={styles.navlink}>Account</a>
                <a href="#" className={styles.navlink}>Dashboard</a>
                <a href="#" className={styles.navlink +" "+ styles.loginbtn}>login</a>
            </div>
        </div>
    )
}
export default Header; 