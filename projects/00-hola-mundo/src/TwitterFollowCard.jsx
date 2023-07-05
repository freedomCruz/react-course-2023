import { useState } from "react"

export function TwitterFollowCard({children, userName }) {

    const [isFollowing, setIsfollowing] = useState(false)

    const text = isFollowing ? 'Following' : 'follow'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'


    const handleClick = () => {
        setIsfollowing(!isFollowing)
    }
    console.log(isFollowing)

    const imageSrc = `https://unavatar.io/${userName}`
    
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar' 
                src={imageSrc} alt="El avatar de Ninesouls" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className = 'tw-followCard-text'>{text}</span> 
                    <span className = 'tw-followCard-stopFollow'>Unfollow</span> 

                </button>
            </aside>
           </article>
    )
}
