import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'



export function App() {
    

    return (
        <section className = "App">
            <TwitterFollowCard  userName="omidnikrah" >
                Pablo Figueroa
            </TwitterFollowCard>
            
            <TwitterFollowCard userName="midudev" > 
                Miguel Ángel Durán 
            </TwitterFollowCard> 

            <TwitterFollowCard  userName="elonmusk" > 
                Pablo Figueroa 
            </TwitterFollowCard>

        </section>
    )
    
}

